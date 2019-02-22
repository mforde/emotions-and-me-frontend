import { combineReducers } from 'redux';
import allNames from './hello';
import webcamStream from './webcam';
import userInfo from './userInfo';
import assignments from './assignments';
import videostream from './videostreaming';
import users from './getUsers';

export default combineReducers({
    allNames,
    webcamStream,
    userInfo,
    assignments,
    videostream,
    users,
})