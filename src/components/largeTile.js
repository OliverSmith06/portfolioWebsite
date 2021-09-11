import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './largeTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#26abbd',
          height: '350px',
          width: '100%',
          borderRadius: '20px',
          textAlign:'left',
          margin:'0',

        },
        


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={8}>
                        <Paper
                        classes={{root: classes.root}} className="largeTile">
                                <div id="largeText" className="text">
                                
                                                {props.children}
                               
                                </div>
                        </Paper>
                </Grid>
        )

}