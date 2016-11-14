import React, { Component } from 'react';
import './app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import CommitsList from '../commits-list/commits-list.view.jsx';
import RepositoryList from '../repository-list/repository-list.view.jsx'

class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
          <div>
            <AppBar title="Facebook Repositories Explorer" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <div className='App'>
              <Paper className='App-leftBar' zDepth={1}>
                <RepositoryList/>
              </Paper>
              <Paper className='App-rightBar' zDepth={1}>
                <CommitsList/>
              </Paper>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
