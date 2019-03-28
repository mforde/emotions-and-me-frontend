import {refreshJWTToken} from "../actions";
import {isAuthenticated} from "../reducers";


export const JWTMiddleware = store => next => action => {
    const getState = store.getState();
    const excludedActions = ['REQUEST_LOGIN', 'FAILED_LOGIN', 'REQUEST_SIGNUP',
        'FAILED_SIGNUP', 'REQUEST_TOKEN', 'FAILED_TOKEN'];

    if (!excludedActions.includes(action.type)) {
        if (getState.userInfo && getState.userInfo.token) {
            if (getState.userInfo.expiration && isAuthenticated) {
                refreshJWTToken(localStorage.getItem('token')).then(() => next(action));
            }
        }
    }

    next(action);
};