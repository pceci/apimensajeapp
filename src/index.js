import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './AppRouter';
import AppMain from './AppMain';
import AppRedux from './AppRedux';
//import reportWebVitals from './reportWebVitals';

const renderApp =() =>{
  ReactDOM.render(
    <React.StrictMode>
      <AppMain />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();


