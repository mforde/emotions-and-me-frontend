import {
    REQUEST_LOGIN, RECEIVE_LOGIN, FAILED_LOGIN,
    REQUEST_SIGNUP, RECEIVE_SIGNUP, FAILED_SIGNUP,
    REQUEST_TOKEN, RECEIVE_TOKEN, FAILED_TOKEN,
    REQUEST_CURRENT_USER, RECEIVE_CURRENT_USER, FAILED_CURRENT_USER,
} from '../actions';
import RequestStatus from '../constants/RequestStatus';
import moment from "moment";

const defaultState = {
    loginRequestStatus: RequestStatus.UNINITIALIZED,
    signupRequestStatus: RequestStatus.UNINITIALIZED,
    currentUserRequestStatus: RequestStatus.UNINITIALIZED,
    token: null,
    expiration: moment(),
    user: {},
    receivedUser: false
};

const setRequestStatus = (actionType, status, state) => {
    let requestStatusType;
    if ([REQUEST_LOGIN, RECEIVE_LOGIN, FAILED_LOGIN].includes(actionType)) {
        requestStatusType = "loginRequestStatus"
    } else if ([REQUEST_SIGNUP, RECEIVE_SIGNUP, FAILED_SIGNUP].includes(actionType)) {
        requestStatusType = "signupRequestStatus"
    } else if ([REQUEST_TOKEN, RECEIVE_TOKEN, FAILED_TOKEN].includes(actionType)) {
        requestStatusType = "tokenRequestStatus"
    } else {
        requestStatusType = "currentUserRequestStatus"
    }

    state[requestStatusType] = status;
    return state;
};

const userInfo = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
        case REQUEST_SIGNUP:
        case REQUEST_TOKEN:
        case REQUEST_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.PENDING,
                {
                    ...state,
                    token: null,
                    expiration: moment(),
                    user: {},
                    receivedUser: false
                }
            );
        case RECEIVE_LOGIN:
        case RECEIVE_TOKEN:
            localStorage.setItem('token', action.token);
            return setRequestStatus(
                action.type,
                RequestStatus.SUCCEEDED,
                {
                    ...state,
                    token: action.token,
                    expiration: moment().add(1, 'h'),
                    user: {
                        username: action.user.username,
                        first_name: action.user.first_name,
                        last_name: action.user.last_name,
                        email: action.user.email,
                        type: action.user.account_type
                    },
                    receivedUser: true
                }
            );
        case RECEIVE_SIGNUP:
            localStorage.setItem('token', action.token);
            return setRequestStatus(
                action.type,
                RequestStatus.SUCCEEDED,
                {
                    ...state,
                    token: action.token,
                    expiration: moment().add(1, 'h'),
                    user: {
                        username: action.username,
                        first_name: action.first_name,
                        last_name: action.last_name,
                        email: action.email,
                        type: action.account_type
                    },
                    receivedUser: true
                }
            );
        case RECEIVE_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.SUCCEEDED,
                {
                    ...state,
                    user: {
                        username: action.user.username,
                        first_name: action.user.first_name,
                        last_name: action.user.last_name,
                        email: action.user.email,
                        type: action.user.account_type
                    },
                    receivedUser: true
                }
            );
        case FAILED_LOGIN:
        case FAILED_SIGNUP:
        case FAILED_TOKEN:
        case FAILED_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.FAILED, 
                {
                    ...state,
                    token: null,
                    expiration: moment(),
                }
            );
        default:
            return state
    }
};

export function accessToken(state) {
    if (state) {
        return state.token
    }
}

export function isTokenExpired(state) {
    if (state.token && state.expiration) {
        return (state.expiration.isAfter(moment().subtract(10, 's')))
    }
    return true
}

export function isAuthenticated(state) {
    return !isTokenExpired(state)
}

export default userInfo;