import React,{useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from '../components/TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';

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
        margin: '50px'
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

    return (
        <div>
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
