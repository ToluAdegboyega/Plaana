import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from './TodoForm';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({

}));

function Todo ({ todos, completeTodo, removeTodo, updateTodo }) {
    const classes = useStyles();

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row-complete' : 'todo-row'}
        key={index}
        >

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className={classes.icons}>
                <HighlightOffIcon
                onClick={() => removeTodo(todo.id)}
                className={classes.deleteIcon}
                />
                <EditIcon
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className={classes.editIcon}
                />
            </div>
           
        </div>
    ));
}

export default Todo;
