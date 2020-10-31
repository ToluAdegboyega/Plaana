import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import TodoList from "./components/TodoList";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#800080",
    height: "100vh"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
    <Container className={classes.container}>
        <TodoList/>
    </Container>
    </div>
  );
}

export default App;
