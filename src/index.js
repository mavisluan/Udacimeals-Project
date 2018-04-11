import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//change the import directory because App was moved to components folder
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import createStore and reducer
import { createStore } from 'redux';
import reducer from './reducers'
//create a redux store
const store = createStore(
  reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  //pass a store prop to the App component that React renders
  <App store = {store}/>,
  document.getElementById('root')
);
registerServiceWorker();
