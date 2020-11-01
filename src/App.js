import React from "react";
import "./assets/App.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import TodoList from "./components/TodoList";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '180px',
    display: 'flex',
    justifyContent: 'center'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <TodoList/>
    </Box>
  );
}

export default App;
