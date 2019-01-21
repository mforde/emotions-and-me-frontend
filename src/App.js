import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import './App.css';
import reducer from './reducers'
import NavBar from './components/NavBar.js';
import Home from  './containers/Home.js';
import Webcam from './containers/Webcam.js';
import Login from './containers/modals/Login';
import Signup from './containers/modals/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('loggedIn') ? true : false,
      loginModalOpen: false,
      signupModalOpen: false,
    }
    this.handleLoginAttempt = this.handleLoginAttempt.bind(this);
    this.handleSignupAttempt = this.handleLoginAttempt.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleLoginAttempt() {
    localStorage.setItem('loggedIn', true);
    this.setState({ isLoggedIn: true })
  }

  handleSignupAttempt() {
    localStorage.setItem('loggedIn', true);
    this.setState({ isLoggedIn: true, loginModalOpen: false });
  }

  handleSignout() {
    localStorage.removeItem('loggedIn');
    this.setState({ isLoggedIn: false });
  }

  render() {
    const middleware = [ thunk ]
    const store = createStore(reducer, applyMiddleware(...middleware));

    const { isLoggedIn, loginModalOpen, signupModalOpen } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Login 
              showModal={loginModalOpen} 
              handleClose={() => this.setState({ loginModalOpen: false })}
              handleLoginAttempt={this.handleLoginAttempt}
            />
            <Signup 
              showModal={signupModalOpen} 
              handleClose={() => this.setState({ signupModalOpen: false })}
              handleSignupAttempt={this.handleSignupAttempt}
            />
            <header>
                <NavBar 
                  isLoggedIn={isLoggedIn} 
                  onClickLogin={() => this.setState({ loginModalOpen: true })} 
                  onClickSignup={() => this.setState({ signupModalOpen: true })} 
                  onClickSignout={() => this.handleSignout()}
                />
            </header>
            <div>
                <Route path="/" exact render={(props) => <Home {...props} isLoggedIn={isLoggedIn} showLoginModal={loginModalOpen} onCloseLoginModal={() => this.setState({ loginModalOpen: false })} />} />
                <Route path="/webcam" component={Webcam} />

                {/* comment these out once we have components to link to */}
                {/* <Route path="/videostreaming" component={VideoStreaming} /> */}
                {/* <Route path="/recordaudio" component={RecordAudio} /> */}
                {/* <Route path="/browse" component={Browse} /> */}
                {/* <Route path="/assignmentcreator" component={AssignmentCreator} /> */}
                {/* <Route path="/myassignments" component={MyAssignments} /> */}

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
