import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './smallTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#252836',
          height: '250px',
          width: '100%',
          borderRadius: '20px',
          backgroundImage: 'url("")',

        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={3}>
                        <Paper
                        style={{backgroundImage: 'url("'+ props.image +'")'}} classes={{root: classes.root}} className="smallTile">
                                <div className="text">
                                
                                                {props.children}
                                
                                </div>
                                
                        </Paper>
                </Grid>
        )

}