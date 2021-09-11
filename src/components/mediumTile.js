import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './mediumTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
        backgroundColor: '#c18164',
        height: '350px',
        width: '100%',
        borderRadius: '20px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '100vw',
        // height: '100vh'

        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                <Grid item xs={4}>
                        <Paper
                        style={{backgroundImage: 'url("'+ props.image +'")'}} classes={{root: classes.root}} className="mediumTile">
                                <div className="text">
                                        
                                                {props.children}
                                        
                                        
                                </div>
                                
                        </Paper>
                </Grid>
        )

}