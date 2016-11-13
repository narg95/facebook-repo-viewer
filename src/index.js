import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import FacebookGithubService from './facebook-github-service/facebook-github.service';
import store from './store';

async function init(){
  const service = new FacebookGithubService();
  const repos = await service.listRepositories();
  store.repos = [...repos];

  ReactDOM.render(
    <App repos={store.repos}/>,
    document.getElementById('root')
  );
}

init();