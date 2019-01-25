import { combineReducers } from 'redux';
import allNames from './hello';
import webcamStream from './webcam';

export default combineReducers({
    allNames,
    webcamStream,
})