import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import thunk from 'redux-thunk'
import './App.css';
import reducer from './reducers'
import Home from  './containers/Home.js';
import Webcam from './containers/Webcam.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentButtonState: true
    }
  }

  renderPage(currentButtonState) {
    if (!currentButtonState) {
      return <Home />
    }
    return <Webcam />
  }

  render() {
    const middleware = [ thunk ]
    const store = createStore(reducer, applyMiddleware(...middleware));
    const { currentButtonState } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/webcam">Webcam</Link>
                </li>
              </ul>
            </header>
            <div className="App-body">
              <Route exact path = "/" component={Home} />
              <Route path="/webcam" component={Webcam} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
