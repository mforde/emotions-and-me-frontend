import {
    REQUEST_LOGIN, RECEIVE_LOGIN, FAILED_LOGIN,
    REQUEST_SIGNUP, RECEIVE_SIGNUP, FAILED_SIGNUP,
    REQUEST_CURRENT_USER, RECEIVE_CURRENT_USER, FAILED_CURRENT_USER,
} from '../actions';
import RequestStatus from '../constants/RequestStatus';

const defaultState = {
    loginRequestStatus: RequestStatus.UNINITIALIZED,
    signupRequestStatus: RequestStatus.UNINITIALIZED,
    currentUserRequestStatus: RequestStatus.UNINITIALIZED,
    token: "",
    user: {},
}

const setRequestStatus = (actionType, status, state) => {
    let requestStatusType;
    if ([REQUEST_LOGIN, RECEIVE_LOGIN, FAILED_LOGIN].includes(actionType)) {
        requestStatusType = "loginRequestStatus"
    } else if ([REQUEST_SIGNUP, RECEIVE_SIGNUP, FAILED_SIGNUP].includes(actionType)) {
        requestStatusType = "signupRequestStatus"
    } else {
        requestStatusType = "currentUserRequestStatus"
    }

    state[requestStatusType] = status;
    return state;
}

const userInfo = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
        case REQUEST_SIGNUP:
        case REQUEST_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.PENDING,
                {
                    ...state,
                    token: "",
                    user: {},
                }
            )
        case RECEIVE_LOGIN:
        case RECEIVE_SIGNUP:
        case RECEIVE_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.SUCCEEDED,
                {
                    ...state,
                    token: action.token,
                    user: action.user,
                }
            )
        case FAILED_LOGIN:
        case FAILED_SIGNUP:
        case FAILED_CURRENT_USER:
            return setRequestStatus(
                action.type,
                RequestStatus.FAILED, 
                {
                    ...state,
                }
            )
        default:
            return state
    }
}

export default userInfo;