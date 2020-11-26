import React,   {useState,  useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from '../components/TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import  Button from '@material-ui/core/Button';
import Todo from './Todo';
import firebaseapp from "../firebase.js";

const useStyles = makeStyles((theme) => ({
    typography: {
        color: 'white',
        marginBottom: '50px',
        textAlign: 'center',
        fontFamily: 'Segoe UI'
    },
    paper: {
        padding: '50px',
        borderRadius: '20px',
        margin: '50px',
        backgroundColor: 'white'
    },
    button: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Segoe UI',
        marginBottom: '50px',
        background: 'linear-gradient( 90deg, rgba(255, 118, 20, 1) 0%,  rgba(255, 84, 17, 1) 100% )',
        padding: '16px',
        borderRadius: '5px',
        marginLeft: '20px'
    }
}));

function TodoList() {
    const classes = useStyles();

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text  || /^\s*$/.test(todo.text)) {
            return 
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text  || /^\s*$/.test(newValue.text)) {
            return 
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
          setTodos(todos);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <Button onClick={() => firebaseapp.auth().signOut()} className={classes.button}>Logout</Button>
            
            <Typography variant="h4" className={classes.typography}>
                What's the plan for today ?
            </Typography>

            <Paper elevation={3} className={classes.paper}>
                <TodoForm onSubmit={addTodo} />
                <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                />
            </Paper>
        </div>
    )
}

export default TodoList;
