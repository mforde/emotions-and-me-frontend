import {REQUEST_STUDENTS, RECEIVE_STUDENTS, FAILED_RECEIVE_STUDENTS,
    REQUEST_TEACHER, RECEIVE_TEACHER, FAILED_RECEIVE_TEACHER,
    ADD_STUDENT, SUCCESSFUL_ADD_STUDENT, FAILED_ADD_STUDENT} from "../actions/getUsers";

const defaultState = {
    isFetching: false,
    hasFailed: false,
    isAdding: false,
    added: false,
    students: null,
    teacher: null,
};

const users = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_STUDENTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_STUDENTS:
            return {
                ...state,
                isFetching: false,
                students: action.data,
            };
        case FAILED_RECEIVE_STUDENTS:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        case REQUEST_TEACHER:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_TEACHER:
            return {
                ...state,
                isFetching: false,
                teacher: action.data,
            };
        case FAILED_RECEIVE_TEACHER:
            return {
                ...state,
                hasFailed: true,
            };
        case ADD_STUDENT:
            return {
                ...state,
                isAdding: true,
            };
        case SUCCESSFUL_ADD_STUDENT:
            return {
                ...state,
                isAdding: false,
                added: action.data,
            };
        case FAILED_ADD_STUDENT:
            return {
                ...state,
                hasFailed: true,
            };
        default:
            return state
    }
};

export default users;