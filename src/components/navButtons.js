import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        navButton:{
                marginLeft: 10,
                marginRight: 10,
                minWidth:0,
                paddingLeft:7,
                paddingRight:7,
                borderRadius:10,
                color: '#fff'
        },
        navTitle:{
                fontSize:14,
                marginLeft: 10,
                marginRight: 10,
                lineHeight:'48px',
                color: '#808191',
                fontFamily: 'Poppins'
        },
        navItem:{
                marginBottom:30
        },


      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        return(
                
                <div>
                {navContent[props.section].map(item => 
                        <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        className={classes.navItem}>
                                <Button variant="contained" className={classes.navButton} color="primary"><Icon>{item.icon}</Icon></Button>
                                <span className={classes.navTitle}>{item.title}</span>
                                
                        </Grid>
                        )}
                </div>
        )

}