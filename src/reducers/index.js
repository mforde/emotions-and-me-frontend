import { combineReducers } from 'redux';
import webcamStream from './webcam';
import userInfo,* as fromAuth from './userInfo';
import assignments from './assignments';
import videostream from './videostreaming';
import users from './getUsers';
import tasklists from './tasklists';


export default combineReducers({
    webcamStream,
    userInfo,
    assignments,
    videostream,
    users,
    tasklists,
})

export const isAuthenticated =
    state => fromAuth.isAuthenticated(state.userInfo);
export const accessToken =
    state => fromAuth.accessToken(state.userInfo);
export const isTokenExpired =
    state => fromAuth.isTokenExpired(state.userInfo);
