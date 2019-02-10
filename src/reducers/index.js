import { combineReducers } from 'redux';
import allNames from './hello';
import webcamStream from './webcam';
import userInfo from './userInfo';

export default combineReducers({
    allNames,
    webcamStream,
    userInfo,
})