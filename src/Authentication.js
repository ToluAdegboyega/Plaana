import React, { useEffect, useState } from "react";
import firebaseapp from "./firebase.js";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
   loading: {
       color: 'white',
       textAlign: 'center',
       fontFamily: 'Segoe UI',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       fontWeight: 900,
       fontSize: '50px',
       height: '100vh'
   }
}));
  

export const AuthContext = React.createContext();



export const AuthProvider = ({ children }) => {
    const classes = useStyles();

    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        firebaseapp.auth().onAuthStateChanged((user) => {
          setCurrentUser(user)
          setPending(false)
        });
    }, []);
    if(pending){
        return <Box className={classes.loading} >Please wait...</Box>
    }
    return (
        <AuthContext.Provider
          value={{
            currentUser
          }}
        >
          {children}
        </AuthContext.Provider>
    );
};