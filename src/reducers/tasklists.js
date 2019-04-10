import {
    FAILED_RECEIVE_TASKLISTS, FAILED_SAVE,
    RECEIVE_TASKLISTS, REQUEST_TASKLISTS,
    SAVE_TASKLIST, SUCCESSFUL_SAVE,
    RESET_SAVE, REMOVE_TASKLIST,
    SUCCESSFUL_TASKLIST_REMOVE, FAILED_TASKLIST_REMOVE,
    UPDATE_TASKLIST, FAILED_UPDATE,
    SUCCESSFUL_UPDATE, REQUEST_TASKLIST,
    RECEIVE_TASKLIST, FAILED_RECEIVE_TASKLIST
} from "../actions/tasklists";

const defaultState = {
    isFetching: false,
    isSaving: false,
    hasSaved: null,
    isRemoving: false,
    hasRemoved: null,
    hasFailed: false,
    tasklistData: null,
    showModal: false,
};

const tasklists = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_TASKLISTS:
        case REQUEST_TASKLIST:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_TASKLISTS:
        case RECEIVE_TASKLIST:
            return {
                ...state,
                isFetching: false,
                tasklistData: action.data,
            };
        case FAILED_RECEIVE_TASKLISTS:
        case FAILED_RECEIVE_TASKLIST:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        case SAVE_TASKLIST:
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
        case REMOVE_TASKLIST:
            return {
                ...state,
                isRemoving: true,
            };
        case SUCCESSFUL_TASKLIST_REMOVE:
            return {
                ...state,
                isRemoving: false,
                hasRemoved: action.data,
                tasklistData: action.data,
            };
        case FAILED_TASKLIST_REMOVE:
            return {
                ...state,
                isRemoving: false,
                hasFailed: true
            };
        case UPDATE_TASKLIST:
            return {
                ...state,
                isSaving: true,
            };
        case SUCCESSFUL_UPDATE:
            return {
                ...state,
                isSaving: false,
                hasSaved: true,
            };
        case FAILED_UPDATE:
            return {
                ...state,
                hasFailed: true,
                isSaving: false,
            };
        default:
            return state
    }
};

export default tasklists;