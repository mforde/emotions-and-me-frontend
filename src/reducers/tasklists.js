import {
    FAILED_RECEIVE_TASKLISTS, FAILED_SAVE,
    RECEIVE_TASKLISTS,
    REQUEST_TASKLISTS,
    SAVE_TASKLIST,
    SUCCESSFUL_SAVE
} from "../actions/tasklists";

const defaultState = {
    isFetching: false,
    isSaving: false,
    hasSaved: null,
    hasFailed: false,
    tasklistData: null,
};

const tasklists = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_TASKLISTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_TASKLISTS:
            return {
                ...state,
                isFetching: false,
                quizData: action.data,
            };
        case FAILED_RECEIVE_TASKLISTS:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        case SAVE_TASKLIST:
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

export default tasklists;