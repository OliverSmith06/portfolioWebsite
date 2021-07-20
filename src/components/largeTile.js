import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#26abbd',
          height: '350px',
          width: '100%',
          borderRadius: '20px',
          textAlign:'left',

        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={8}>
                        <Paper
                        classes={{root: classes.root}}>
                                {props.children}
                        </Paper>
                </Grid>
        )

}