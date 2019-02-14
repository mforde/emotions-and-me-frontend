import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { handleLoginAttempt, handleSignupAttempt, handleCheckToken } from './actions';
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
import RequestStatus from './constants/RequestStatus';
import AssignmentCreator from "./containers/AssignmentCreator";
import QuizMakerPage from "./containers/QuizMakerPage";
import TasklistCreator from "./containers/TasklistCreator";
import MyAssignments from "./containers/MyAssignments";
import TakeQuiz from "./containers/TakeQuiz";

const ModalOptions = {
  NONE: "NONE",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};

class App extends Component {
  static propTypes = {
    loginRequestStatus: PropTypes.string.isRequired,
    signupRequestStatus: PropTypes.string.isRequired,
    currentUserRequestStatus: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    handleLoginAttempt: PropTypes.func.isRequired,
    handleSignupAttempt: PropTypes.func.isRequired,
    handleCheckToken: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('token') ? true : false,
      openModal: ModalOptions.NONE,
    };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    if(this.state.isLoggedIn) {
      this.props.handleCheckToken();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      if (this.props.token) {
        this.setState({ isLoggedIn: true, openModal: ModalOptions.NONE });
      }
    }
  }

  handleSignout() {
    localStorage.removeItem('token');
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
        <Route path="/takequiz" component={TakeQuiz} />
      </div>
    )
  }

  render() {
    const { isLoggedIn, openModal } = this.state;

    return (
        <Router>
          <div>
            <Login 
              showModal={openModal === ModalOptions.LOGIN} 
              handleClose={this.handleCloseModal}
              handleLoginAttempt={this.props.handleLoginAttempt}
              hasFailed={this.props.loginRequestStatus === RequestStatus.FAILED}
            />
            <Signup 
              showModal={openModal === ModalOptions.SIGNUP} 
              handleClose={this.handleCloseModal}
              handleSignupAttempt={this.props.handleSignupAttempt}
              hasFailed={this.props.signupRequestStatus === RequestStatus.FAILED}
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
    );
  }
}

const mapStateToProps = state => {
  return state.userInfo
};

const mapDispatchToProps = {
  handleLoginAttempt,
  handleSignupAttempt,
  handleCheckToken,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
