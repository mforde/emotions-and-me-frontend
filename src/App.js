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
import VideoStreaming from './containers/Videostreaming.js'
import RecordAudio from './containers/RecordAudio.js'
import Browse from './containers/Browse.js'
import AudioList from './components/AudioList.js'
import PictureList from './components/PictureList.js'
import DemoCarousel from './components/PictureCarousel.js'
import AudioPlayer from './components/AudioPlayer.js';
import AssignmentCreator from "./containers/AssignmentCreator";
import QuizMakerPage from "./containers/QuizMakerPage";
import TasklistCreator from "./containers/TasklistCreator";
import MyAssignments from "./containers/MyAssignments";

const ModalOptions = {
  NONE: "NONE",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('loggedIn') ? true : false,
      openModal: ModalOptions.NONE,
    }
    this.handleLoginAttempt = this.handleLoginAttempt.bind(this);
    this.handleSignupAttempt = this.handleLoginAttempt.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleLoginAttempt(e) {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    this.setState({ isLoggedIn: true, openModal: ModalOptions.NONE })
  }

  handleSignupAttempt(e) {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    this.setState({ isLoggedIn: true, openModal: ModalOptions.NONE });
  }

  handleSignout() {
    localStorage.removeItem('loggedIn');
    this.setState({ isLoggedIn: false });
  }

  handleCloseModal() {
    this.setState({ openModal: ModalOptions.NONE })
  }

  renderRoutes({ isLoggedIn }) {
    if (!isLoggedIn) {
      return (
        <Route path="/" render={(props) => <Home {...props} isLoggedIn={isLoggedIn} />} />
      )
    }

    return (
      <div>
        <Route path="/" exact render={(props) => <Home {...props} isLoggedIn={isLoggedIn} />} />
        <Route path="/webcam" component={Webcam} />
        <Route path="/videostreaming" component={VideoStreaming} />
        <Route path="/recordaudio" component={RecordAudio} />
        <Route path="/browse"  component={Browse} />
        <Route path="/carousel"  component={DemoCarousel} />
        <Route path="/picturelist"  component={PictureList} />
        <Route path="/audiolist"  component={AudioList} />
        <Route path="/audioplayer"  component={AudioPlayer} />
        <Route path="/assignmentcreator" component={AssignmentCreator} />
        <Route path="/assignmentcreator/quizmaker" component={QuizMakerPage} />
        <Route path="/assignmentcreator/tasklistcreator" component={TasklistCreator} />
        <Route path="/myassignments" component={MyAssignments} />
      </div>
    )
  }

  render() {
    const middleware = [ thunk ]
    const store = createStore(reducer, applyMiddleware(...middleware));

    const { isLoggedIn, openModal } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Login
              showModal={openModal === ModalOptions.LOGIN}
              handleClose={this.handleCloseModal}
              handleLoginAttempt={this.handleLoginAttempt}
            />
            <Signup
              showModal={openModal === ModalOptions.SIGNUP}
              handleClose={this.handleCloseModal}
              handleSignupAttempt={this.handleSignupAttempt}
            />
            <header>
                <NavBar
                  isLoggedIn={isLoggedIn}
                  onClickLogin={() => this.setState({ openModal: ModalOptions.LOGIN })}
                  onClickSignup={() => this.setState({ openModal: ModalOptions.SIGNUP })}
                  onClickSignout={() => this.handleSignout()}
                />
            </header>
            <div>
                {this.renderRoutes({ isLoggedIn })}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
