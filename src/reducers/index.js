import { combineReducers } from 'redux';
import allNames from './hello';
import webcamStream from './webcam';
import videostream from './videostreaming';

export default combineReducers({
    allNames,
    webcamStream,
    videostream,
})