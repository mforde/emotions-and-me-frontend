import BaseUrl from "../constants/BaseUrl";

export const REQUEST_ASSIGNMENTS = 'REQUEST_ASSIGNMENTS';
export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS';
export const FAILED_RECEIVE_ASSIGNMENTS = 'FAILED_RECEIVE_ASSIGNMENTS';

export const SAVE_ASSIGNMENT = 'SAVE_ASSIGNMENT';
export const FAILED_SAVE = 'FAILED_SAVE';
export const SUCCESSFUL_SAVE = 'SUCCESSFUL_SAVE';
export const RESET_SAVE = "RESERT_SAVE";

export const REMOVE_ASSIGNMENT = 'REMOVE_ASSIGNMENT';
export const FAILED_REMOVE = 'FAILED_REMOVE';
export const SUCCESSFUL_REMOVE = 'SUCCESSFUL_REMOVE';

export const REQUEST_ASSIGNMENT = 'REQUEST_ASSIGNMENT';
export const RECEIVE_ASSIGNMENT = 'RECEIVE_ASSIGNMENT';
export const FAILED_RECEIVE_ASSIGNMENT = 'FAILED_RECEIVE_ASSIGNMENT';


export const requestAssignments = () => ({
    type : REQUEST_ASSIGNMENTS
});

export const receiveAssignments = json => ({
    type: RECEIVE_ASSIGNMENTS,
    data: json,
});

export const failedToReceiveAssignments = () => ({
    type: FAILED_RECEIVE_ASSIGNMENTS,
});

export const saveAssignment = () => ({
    type : SAVE_ASSIGNMENT
});

export const successfulSave = (data) => ({
    type: SUCCESSFUL_SAVE,
    data: data
});

export const failedSave = () => ({
    type: FAILED_SAVE
});

export const resetSaveAssignment = () => ({
    type: RESET_SAVE
});

export const removeAssignment = () => ({
    type : REMOVE_ASSIGNMENT
});

export const successfulRemove = (data) => ({
    type : SUCCESSFUL_REMOVE,
    data : data
});

export const failedRemove = () => ({
    type : FAILED_REMOVE
});

export const requestAssignment = () => ({
    type : REQUEST_ASSIGNMENT
});

export const receiveAssignment = json => ({
    type: RECEIVE_ASSIGNMENT,
    data: json,
});

export const failedToReceiveAssignment = () => ({
    type: FAILED_RECEIVE_ASSIGNMENT,
});

export const fetchAssignments = (username, type) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/quizzes?teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/quizzes?student=' + username;
    }

    return (dispatch) => {
        dispatch(requestAssignments());

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAssignments(json)),
                () => dispatch(failedToReceiveAssignments()))
            .catch(function (error) {
                console.error(error);
            });
    }
};

export const sendAssignment = (username, students, data) => {
    return (dispatch) => {
        dispatch(saveAssignment());

        let studentQuery = '';
        let idx = 0;
        students.forEach(function (student) {
            if (idx === 0) {
                studentQuery = student;
            }
            else {
                studentQuery = studentQuery + ',' + student;
            }
            idx = idx + 1;
        });

        fetch(BaseUrl + 'assignments/save/quiz?teacher=' + username + '&students=' + studentQuery, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
            body: data
        })
            .then(response => response.json())
            .then(json => dispatch(successfulSave(json)),
                () => dispatch(failedSave()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const resetSaveQuiz = () => {
    return (dispatch) => {
        dispatch(resetSaveAssignment());
    }
};

export const deleteAssignment = (username, type, quizName) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/remove/quiz?quizName=' + quizName + '&teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/remove/quiz?quizName=' + quizName + '&student=' + username;
    }

    return (dispatch) => {
        dispatch(removeAssignment());

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(successfulRemove(json)),
                () => dispatch(failedRemove()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const getSingleQuiz = (username, type, quizName) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/getquiz?quizName=' + quizName + '&teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/getquiz?quizName=' + quizName + '&student=' + username;
    }

    return (dispatch) => {
        dispatch(requestAssignment());

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAssignment(json)),
                () => dispatch(failedToReceiveAssignment()))
            .catch(function(error) {
                console.error(error);
            });
    }
};
