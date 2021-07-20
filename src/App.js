import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { Button, Grid, TextField, Paper, Box, Typography } from '@material-ui/core';
// import EmojiResults from "./EmojiResults";
import SideNav from './components/sideNav';
import SearchInput from "./components/SearchInput";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import LargeTile from './components/largeTile';
import MediumTile from './components/mediumTile';
import SmallTile from './components/smallTile';
import HeadTile from './components/headTile';

const useStyles = makeStyles((theme) => ({}));


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#353440',
      dark: '#FF7551',
      contrastText: '#808191',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default class App extends PureComponent {



  render() {
    
    return (
      <div>
    <div className="App">
    <SideNav></SideNav>
    
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap" />
      <header className="App-header">
      
      {/* <Grid
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className="SearchBox">
        
      </Grid> */}


        <Grid
         className="landingContent"
          container 
          direction={'row'}
          justifyContent='flex-start'
          spacing={3}
         >
        
          <Grid item xs={12}
          ><TextField color="primary" InputLabelProps={{className: 'textfield__label'}} className="searchBox" id="outlined-basic" label="Search" variant="outlined" /></Grid>
          
            {/* <Paper PaperProps={{ classes: {root: classes.drawer } }}>xs=10 */}
            {/* </Paper> */}
            <ThemeProvider theme={theme}>
            <HeadTile><span className="HeadTile pageHeader" >Discover</span></HeadTile>
            <LargeTile><div className="largeTitle">Recently Accessed Projects</div>
              <table className="recentList">
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Last Opened</th>
              </tr>
              <tr>
                <td>Valorant Go! Knife</td>
                <td>Starting With Speechy</td>
                <td>This Website</td>
              </tr>
              <tr>
                <td>3D Modelling</td>
                <td>Speechy</td>
                <td>Web Development</td>
              </tr>
              <tr>
                <td>19/07/2021</td>
                <td>20/07/2021</td>
                <td>21/07/2021</td>
              </tr>
            </table>
            </LargeTile>
            <MediumTile><div className="mediumTitle">Featured</div></MediumTile>
            <HeadTile><span className="HeadTile pageSub">Favourites</span></HeadTile>
            <SmallTile></SmallTile>
            <SmallTile></SmallTile>
            <SmallTile></SmallTile>
            <SmallTile></SmallTile>
            </ThemeProvider>
          
        </Grid>

      </header>
    </div>
      </div>
    );
  }
}

