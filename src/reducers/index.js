import { combineReducers } from 'redux';
import {
    REQUEST_ALL_NAMES, RECEIVE_ALL_NAMES,
} from '../actions';

const defaultState = {
    isFetching: false,
    names: [],
}

const allNames = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ALL_NAMES:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVE_ALL_NAMES:
            return {
                ...state,
                isFetching: false,
                names: action.names,
            }
        default:
            return state
    }
}

export default combineReducers({
    allNames
})