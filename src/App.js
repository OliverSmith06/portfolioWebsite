import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { Button, Grid, TextField, Paper, Box, Typography, Icon } from '@material-ui/core';
// import EmojiResults from "./EmojiResults";
import SideNav from './components/sideNav';
import SearchInput from "./components/SearchInput";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import LargeTile from './components/largeTile';
import MediumTile from './components/mediumTile';
import SmallTile from './components/smallTile';
import HeadTile from './components/headTile';
import ReactMarkdown from 'react-markdown';
import RecentItems from './components/recentItems'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { projectList } from './components/projectList';

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
      <Router>
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
            <Route exact={true} path="/">
              <HeadTile><span className="HeadTile pageHeader" >Discover</span></HeadTile>
              <LargeTile><div className="largeTitle">Recently Accessed Projects</div>
              <RecentItems></RecentItems>
              </LargeTile>
              <MediumTile><div className="mediumTitle">Featured<ReactMarkdown>Hello, World</ReactMarkdown></div></MediumTile>
              <HeadTile><span className="HeadTile pageSub">Favourites</span></HeadTile>
              <SmallTile></SmallTile>
              <SmallTile></SmallTile>
              <SmallTile></SmallTile>
              <SmallTile></SmallTile>
            </Route>
            
            
            </ThemeProvider>
            <Route path="/f/:itemTitle" render={({ match }) => (
            <Post post={projectList.find(p => p.title === match.params.itemTitle)} />)} />
          
        </Grid>

      </header>
    </div>
      </div>
      </Router>
    );
  }
}

const Post = ({  post }) => (
    <ThemeProvider theme={theme}>
    <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
    
    <HeadTile><span className="HeadTile pageHeader" >{post.title}</span></HeadTile>
    <HeadTile><span className="HeadTile pageSub">{post.subject}</span></HeadTile>
    <LargeTile><div className="largeTitle"><ReactMarkdown>{post.description}</ReactMarkdown></div></LargeTile>
    
    </ThemeProvider>
)