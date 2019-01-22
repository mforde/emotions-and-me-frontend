import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import './App.css';
import reducer from './reducers'
import NavBar from './components/NavBar.js';
import Home from  './containers/Home.js';
import Login from './containers/Login.js';
import VideoStreaming from './containers/Videostreaming.js'
import RecordAudio from './containers/RecordAudio.js'
import Browse from './containers/Browse.js'
import  AudioList from './components/AudioList.js'
import  PictureList from './components/PictureList.js'
import DemoCarousel from './components/PictureCarousel.js'

import AudioPlayer from './components/AudioPlayer.js';

class App extends Component {
  render() {
    const middleware = [ thunk ]

    const store = createStore(reducer, applyMiddleware(...middleware));

    return (
      <Provider store={store}>
        <Router>
            <Switch>
          <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <div className="App-body">
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                
                {/* comment these out once we have components to link to */}
                {/* <Route path="/signup" component={SignUp} /> */}
                {/* <Route path="/webcam" component={Webcam} /> */}
                <Route path="/videostreaming" component={VideoStreaming} />
                <Route path="/recordaudio" component={RecordAudio} />
                <Route path="/browse"  component={Browse} />
                <Route  path="/carousel"  component={DemoCarousel} />
                <Route  path="/picturelist"  component={PictureList} />
                <Route  path="/audiolist"  component={AudioList} />
                <Route  path="/audioplayer"  component={AudioPlayer} />

                {/* <Route path="/assignmentcreator" component={AssignmentCreator} /> */}
                {/* <Route path="/myassignments" component={MyAssignments} /> */}

            </div>
          </div>
            </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
