import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ShortText from 'material-ui/svg-icons/editor/short-text';
import Grade from 'material-ui/svg-icons/action/grade';
import Split from 'material-ui/svg-icons/communication/call-split';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';

class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
          <div>
            <AppBar title="Facebook Repositories Explorer" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <div className='App'>
              <Paper className='App-leftBar' zDepth={1}>
                <List>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>
                  <RepositoryItem/>                                  
                </List>
              </Paper>

              <Paper className='App-rightBar' zDepth={1} />
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

const RepositoryItem = () =>
   <ListItem
      leftAvatar={<Avatar icon={<FileFolder />} />}
      primaryText="android-jsc"
      secondaryText={
        <div style={{height: 50}}>
          <div>Scripts for building JSC for Android</div> 
          <div>
            <span className='Feature'><ShortText viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> Javascript</span>
            <span className='Feature'><Grade viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> 64</span>
            <span className='Feature'><Split viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> 40</span>
            <span className='Feature'><AccessTime viewPort='0 0 20 20' style={{marginTop: 5, height: 20, width: 20}}/> One month ago</span>
          </div>
        </div>
      }                    
    />;

export default App;
