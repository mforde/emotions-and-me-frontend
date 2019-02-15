import {REQUEST_ASSIGNMENTS, RECEIVE_ASSIGNMENTS, FAILED_RECEIVE_ASSIGNMENTS,
        SAVE_ASSIGNMENT, SUCCESSFUL_SAVE, FAILED_SAVE} from "../actions/assignments";

const defaultState = {
    isFetching: false,
    isSaving: false,
    hasSaved: null,
    hasFailed: false,
    quizData: null,
};

const assignments = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ASSIGNMENTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_ASSIGNMENTS:
            return {
                ...state,
                isFetching: false,
                quizData: action.data,
            };
        case FAILED_RECEIVE_ASSIGNMENTS:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        case SAVE_ASSIGNMENT:
            return {
                ...state,
                isSaving: true,
            };
        case SUCCESSFUL_SAVE:
            return {
                ...state,
                isSaving: false,
                hasSaved: action.data,
            };
        case FAILED_SAVE:
            return {
                ...state,
                hasFailed: true,
            };
        default:
            return state
    }
};

export default assignments;