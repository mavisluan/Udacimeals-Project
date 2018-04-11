import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//change the import directory because App was moved to components folder
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import createStore and reducer
import { createStore } from 'redux';
//import Provider component to pass data from store to any React components
import { Provider } from 'react-redux';
import reducer from './reducers'
//create a redux store
const store = createStore(
  reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  //Wrap the main react component (App) into Provider and then pass the store to Provider
  //so that App component and all the components that App renders will get the data from the store.
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
