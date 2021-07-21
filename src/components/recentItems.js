import React, { Component } from "react";
import { navContent } from './navContent';
import { projectList } from './projectList';
import { Grid, Button, Icon } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },


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
                                              <tr>
                                              <td><Icon>{item.icon}</Icon></td>
                                              <td>{item.title}</td>
                                              <td>{item.subject}</td>
                                              <td>{item.lastOpened}</td>
                                            </tr>
                        )}
                </table>
        )

}