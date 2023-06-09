//REACT 17

import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only // for React version 18
import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

atatus.config('4ec774bd8fa740eda0240fc49f218862').install();

// const root = //ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the //correct method call for React version 17
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, root);


//REACT 18 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// atatus.notify(new Error('Test Atatus Setup'));