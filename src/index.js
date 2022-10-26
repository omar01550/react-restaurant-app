import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider}  from 'react-redux';
import Data from './data.json';
const root = ReactDOM.createRoot(document.getElementById('root'));

const initState=Data;

function reducer(state=initState,action) {
     return state;
}



const store = createStore(reducer)




root.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>
);


reportWebVitals();
