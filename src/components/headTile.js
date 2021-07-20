import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: 'inherit',
          height: '50px',
          width: '100%',
          boxShadow: 'none',
          textAlign:'left'

        },


      }));


export default function HeadTile(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={12}>
                        <Paper
                        classes={{root: classes.root}}>
                                {props.children}
                        </Paper>
                </Grid>
        )

}