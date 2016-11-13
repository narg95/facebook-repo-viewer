import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import FacebookGithubService from './facebook-github-service/facebook-github.service';

async function init(){
  const service = new FacebookGithubService();
  const repos = await service.listRepositories();
  const last20Commits = await service.getLast20CommitsFromRepo('react');

  ReactDOM.render(
    <App repos={repos} commits={last20Commits}/>,
    document.getElementById('root')
  );
}

init();