import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './smallTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#252836',
          height: '250px',
          width: '100%',
          borderRadius: '20px',

        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={3}>
                        <Paper
                        classes={{root: classes.root}} className="smallTile">
                                {props.children}
                        </Paper>
                </Grid>
        )

}