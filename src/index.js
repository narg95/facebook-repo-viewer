import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import './index.css';
import Store from './store/store';
import ContextProvider from './context-provider/context-provider.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const store = new Store();

ReactDOM.render(
  <ContextProvider context={{store: store}}>
    <App/>
  </ContextProvider>,
  document.getElementById('root')
);

store.loadRepos();