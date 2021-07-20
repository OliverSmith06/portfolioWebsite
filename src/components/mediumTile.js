import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './mediumTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#c18164',
          height: '350px',
          width: '100%',
          borderRadius: '20px',

        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={4}>
                        <Paper
                        classes={{root: classes.root}} className="mediumTile">
                                {props.children}
                        </Paper>
                </Grid>
        )

}