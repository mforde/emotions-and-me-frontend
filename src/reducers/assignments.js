import {
    REQUEST_ASSIGNMENTS,
    RECEIVE_ASSIGNMENTS,
    FAILED_RECEIVE_ASSIGNMENTS,
    SAVE_ASSIGNMENT,
    SUCCESSFUL_SAVE, FAILED_SAVE,
    RESET_SAVE, REMOVE_ASSIGNMENT,
    SUCCESSFUL_REMOVE, FAILED_REMOVE,
    REQUEST_ASSIGNMENT,
    RECEIVE_ASSIGNMENT,
    FAILED_RECEIVE_ASSIGNMENT
} from "../actions/assignments";

const defaultState = {
    isFetching: false,
    isSaving: false,
    hasSaved: null,
    isRemoving: false,
    hasRemoved: null,
    hasFailed: false,
    quizData: null,
    showModal: false,
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
                showModal: true,
            };
        case SUCCESSFUL_SAVE:
            return {
                ...state,
                isSaving: false,
                hasSaved: action.data,
                showModal: true,
            };
        case FAILED_SAVE:
            return {
                ...state,
                hasFailed: true,
                showModal: true,
            };
        case RESET_SAVE:
            return {
                ...state,
                showModal: false,
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
                hasRemoved: action.data,
                quizData: action.data
            };
        case FAILED_REMOVE:
            return {
                ...state,
                isRemoving: false,
                hasFailed: true
            };
        case REQUEST_ASSIGNMENT:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_ASSIGNMENT:
            return {
                ...state,
                isFetching: false,
                quizData: action.data,
            };
        case FAILED_RECEIVE_ASSIGNMENT:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        default:
            return state
    }
};

export default assignments;