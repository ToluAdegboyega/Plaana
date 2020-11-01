import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
    toDoForm: {
        width: "100%",
    },
    toDoInput: {
        padding: '14px',
        borderRadius: '5px',
        border: '2px solid #5d0cff',
        outline: 'none',
        background: 'transparent',
        color: 'grey',
        fontSize: '18px'
      },
      toDoInputEdit: {
        padding: '14px',
        borderRadius: '5px',
        border: '2px solid rgba(44, 130, 201, 1)',
        outline: 'none',
        background: 'transparent',
        color: 'grey',
        fontSize: '18px',
        marginTop: '30px'
      },
    toDoButton: {
        padding: '15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
        background: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100% )',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginLeft: '20px',
        marginBottom: '5px',
        fontFamily: 'Segoe UI',
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginRight: '20px',
            marginLeft: '50px'
        },
    },
    toDoEditButton: {
        padding: '15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
        background: 'linear-gradient(90deg, rgba(44, 130, 201, 1) 0%, rgba(0, 181, 204, 1) 100% )',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginLeft: '20px',
        marginBottom: '5px',
        fontFamily: 'Segoe UI',
        [theme.breakpoints.down('xs')]: {
            marginRight: '20px',
            marginLeft: '40px',
            marginTop: '20px',
        },
    },
}));

function TodoForm(props) {
    const classes = useStyles();

    const [input, setInput] = 
    useState(props.edit ? props.edit.value : '');

   
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
                 <InputBase type="text"
                 placeholder="Update your list" 
                 value={input}
                 name="text" className={classes.toDoInputEdit}
                 onChange={handleChange}
                 //autoFocus
                 multiline
                />
                <Button className={classes.toDoEditButton} 
                variant="contained"
                type="submit">
                    Update 
                </Button>
                </>
            ) : 
            (
                <>
                <InputBase type="text"
                placeholder="Add a ToDo" 
                value={input}
                name="text" className={classes.toDoInput}
                onChange={handleChange}
                autoFocus 
                multiline
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
