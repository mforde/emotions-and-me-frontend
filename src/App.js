import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './App.css';
import reducer from './reducers'
import Home from  './containers/Home.js';

class App extends Component {
  render() {
    const middleware = [ thunk ]

    const store = createStore(reducer, applyMiddleware(...middleware));

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Home />
           </header>
        </div>
      </Provider>
    );
  }
}

export default App;
