import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from './Routes';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import * as TodoActions from './todos/actions/todoActions';

const store = configureStore();

store.dispatch(TodoActions.GetTodos());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>  
    );
  }
}

export default App;
