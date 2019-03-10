import {
    REQUEST_ASSIGNMENTS,
    RECEIVE_ASSIGNMENTS,
    FAILED_RECEIVE_ASSIGNMENTS,
    SAVE_ASSIGNMENT,
    SUCCESSFUL_SAVE, FAILED_SAVE,
    REMOVE_ASSIGNMENT,
    SUCCESSFUL_REMOVE, FAILED_REMOVE
} from "../actions/assignments";

const defaultState = {
    isFetching: false,
    isSaving: false,
    hasSaved: null,
    isRemoving: false,
    hasRemoved: null,
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
        case REMOVE_ASSIGNMENT:
            return {
                ...state,
                isRemoving: true,
            };
        case SUCCESSFUL_REMOVE:
            return {
                ...state,
                isRemoving: false,
                quizData: action.data
            };
        case FAILED_REMOVE:
            return {
                ...state,
                hasFailed: true
            };
        default:
            return state
    }
};

export default assignments;