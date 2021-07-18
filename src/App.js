import React from "react";
import "./assets/App.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Authentication";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <Router>
        <Box className={classes.container}>
          <PrivateRoute exact path="/Todo-List" component={TodoList} />
          <Route exact path="/Todo-List/login" component={Login} />
          <Route exact path="/Todo-List/signup" component={SignUp} />
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
