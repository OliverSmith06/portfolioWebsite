import React, { Component } from "react";
import { navContent } from './navContent';
import { projectList } from './projectList';
import { Grid, Button, Icon } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './recentItems.css';
import '../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        // hover: {
        //         color: 'black',
        //         '&:hover': {
        //                 background: "#f00",
        //               }
        // }


      }));


export default function RecentItems(props){

        
        const classes = useStyles();
        return(
                
                <table className="recentList">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Subject</th>
                  <th>Last Opened</th>
                </tr>
                        {projectList.map(item =>
                                              <tr className={classes.hover}>
                                              <td><Icon>{item.icon}</Icon></td>
                                              <td><Link className='routeLink' to={`/f/${item.title}`}>{item.title}</Link></td>
                                              <td>{item.subject}</td>
                                              <td>{item.lastOpened}</td>
                                            </tr>
                        )}
                </table>
                
        )

}