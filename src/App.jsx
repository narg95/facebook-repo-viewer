import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import RepositoryItem from './repository-item/repository-item.view.jsx';
import CommitsList from './commits-list/commits-list.view.jsx';

class App extends Component {

  render() {
    const {repos, commits} = this.props;
    return (
      <MuiThemeProvider>
          <div>
            <AppBar title="Facebook Repositories Explorer" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <div className='App'>
              <Paper className='App-leftBar' zDepth={1}>
                <List>
                  {repos.map(repoInfo => <RepositoryItem repoInfo={repoInfo} key={repoInfo.id}/>)}                                                    
                </List>
              </Paper>
              <Paper className='App-rightBar' zDepth={1}>
                <CommitsList commits={commits}/>
              </Paper>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
