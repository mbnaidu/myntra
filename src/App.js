import React, { Component } from 'react';
import './App.css';
import Main from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './redux/configureStore';

const store = configureStore();

 class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
            <BrowserRouter >
            <div>
              <Main />
            </div>
          </BrowserRouter>
          </Provider>
      </div>
    )
  }
}

export default App
