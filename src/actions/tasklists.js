import BaseUrl from "../constants/BaseUrl";

export const REQUEST_TASKLISTS = 'REQUEST_TASKLISTS';
export const RECEIVE_TASKLISTS = 'RECEIVE_TASKLISTS';
export const FAILED_RECEIVE_TASKLISTS = 'FAILED_RECEIVE_TASKLISTS';

export const SAVE_TASKLIST = 'SAVE_TASKLIST';
export const FAILED_SAVE = 'FAILED_SAVE';
export const SUCCESSFUL_SAVE = 'SUCCESSFUL_SAVE';

export const REMOVE_TASKLIST = 'REMOVE_TASKLIST';
export const FAILED_REMOVE = 'FAILED_REMOVE';
export const SUCCESSFUL_REMOVE = 'SUCCESSFUL_REMOVE';

export const requestTasklists = () => ({
    type : REQUEST_TASKLISTS
});

export const receiveTasklists = json => ({
    type: RECEIVE_TASKLISTS,
    data: json,
});

export const failedToReceiveTasklists = () => ({
    type: FAILED_RECEIVE_TASKLISTS,
});

export const saveTasklist = () => ({
    type : SAVE_TASKLIST
});

export const successfulSave = (data) => ({
    type: SUCCESSFUL_SAVE,
    data: data
});

export const failedSave =() => ({
    type: FAILED_SAVE
});

export const removeTasklist = () => ({
    type : REMOVE_TASKLIST
});

export const successfulRemove = (data) => ({
    type : SUCCESSFUL_REMOVE,
    data : data
});

export const failedRemove = () => ({
    type : FAILED_REMOVE
});

export const fetchTasklists = () => {
    return (dispatch) => {
        dispatch(requestTasklists());
        fetch(BaseUrl + 'assignments/teacher/tasklists?teacher=username', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveTasklists(json)),
                () => dispatch(failedToReceiveTasklists()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const sendTasklist = (students, data) => {
    return (dispatch) => {
        dispatch(saveTasklist());

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

        fetch(BaseUrl + 'assignments/save/tasklist?teacher=username&students=' + studentQuery, {
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

export const deleteTasklist = (tasklistName) => {
    return (dispatch) => {
        dispatch(removeTasklist());

        fetch(BaseUrl + 'assignments/remove/tasklist?tasklistName=' + tasklistName, {
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
