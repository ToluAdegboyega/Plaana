import React, {useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    toDoInput: {
        borderRadius: "8px",
        backgroundColor: "white",
        padding: "5px"
      },
      toDoButton: {
        margin: theme.spacing(1),
      },
}));

function TodoForm(props) {
    const classes = useStyles();

    const [input, setInput] = 
    useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className={classes.toDoForm} onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                 <input type="text"
                 placeholder="Update your list" 
                 value={input}
                 name="text" className={classes.toDoInputEdit}
                 onChange={handleChange}
                 ref={inputRef}
                />
                <Button className={classes.toDoButton} 
                variant="contained"
                type="submit">
                    Update
                </Button>
                </>
            ) : 
            (
                <>
                <input type="text"
                placeholder="Add a ToDo" 
                value={input}
                name="text" className={classes.toDoInput}
                onChange={handleChange}
                ref={inputRef}
               />
               <Button className={classes.toDoButton} 
               variant="contained"
               type="submit">
                   Add
               </Button>
               </>
            )}

        </form>
    )
}

export default TodoForm;
