import BaseUrl from "../constants/BaseUrl";

export const REQUEST_ASSIGNMENTS = 'REQUEST_ASSIGNMENTS';
export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS';
export const FAILED_RECEIVE_ASSIGNMENTS = 'FAILED_RECEIVE_ASSIGNMENTS';

export const SAVE_ASSIGNMENT = 'SAVE_ASSIGNMENT';
export const FAILED_SAVE = 'FAILED_SAVE';
export const SUCCESSFUL_SAVE = 'SUCCESSFUL_SAVE';

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

export const failedSave =() => ({
    type: FAILED_SAVE
});

export const fetchAssignments = () => {
    return (dispatch) => {
        dispatch(requestAssignments())
        fetch(BaseUrl + 'assignments/teacher?teacher=username', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAssignments(json)),
                () => dispatch(failedToReceiveAssignments()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const sendAssignment = (students, data) => {
    return (dispatch) => {
        dispatch(saveAssignment());

        let studentQuery = '';
        students.forEach(function (student) {
            studentQuery = studentQuery + ',' + student;
        });

        fetch(BaseUrl + 'assignments/save?teacher=username&students=' + studentQuery, {
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

