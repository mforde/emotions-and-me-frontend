import BaseUrl from "../constants/BaseUrl";

export const REQUEST_TASKLISTS = 'REQUEST_TASKLISTS';
export const RECEIVE_TASKLISTS = 'RECEIVE_TASKLISTS';
export const FAILED_RECEIVE_TASKLISTS = 'FAILED_RECEIVE_TASKLISTS';

export const REQUEST_TASKLIST = 'REQUEST_TASKLIST';
export const RECEIVE_TASKLIST = 'RECEIVE_TASKLIST';
export const FAILED_RECEIVE_TASKLIST = 'FAILED_RECEIVE_TASKLIST';

export const SAVE_TASKLIST = 'SAVE_TASKLIST';
export const FAILED_SAVE = 'FAILED_SAVE';
export const SUCCESSFUL_SAVE = 'SUCCESSFUL_SAVE';
export const RESET_SAVE = 'RESET_SAVE';

export const REMOVE_TASKLIST = 'REMOVE_TASKLIST';
export const FAILED_TASKLIST_REMOVE = 'FAILED_TASKLIST_REMOVE';
export const SUCCESSFUL_TASKLIST_REMOVE = 'SUCCESSFUL_TASKLIST_REMOVE';

export const UPDATE_TASKLIST = 'UPDATE_TASKLIST';
export const FAILED_UPDATE = 'FAILED_UPDATE';
export const SUCCESSFUL_UPDATE = 'SUCCESSFUL_UPDATE';

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

export const requestTasklist = () => ({
    type : REQUEST_TASKLIST
});

export const receiveTasklist = json => ({
    type: RECEIVE_TASKLIST,
    data: json,
});

export const failedToReceiveTasklist = () => ({
    type: FAILED_RECEIVE_TASKLIST,
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

export const resetSave = () => ({
    type: RESET_SAVE
});

export const removeTasklist = () => ({
    type : REMOVE_TASKLIST
});

export const successfulTasklistRemove = (data) => ({
    type : SUCCESSFUL_TASKLIST_REMOVE,
    data : data
});

export const failedTasklistRemove = () => ({
    type : FAILED_TASKLIST_REMOVE
});

export const updatingTasklist = () => ({
    type: UPDATE_TASKLIST,
});

export const failedUpdate = () => ({
    type: FAILED_UPDATE,
});

export const successfulUpdate = (data) => ({
    type: SUCCESSFUL_UPDATE,
    data: data,
});

export const fetchTasklists = (username, type) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/tasklists?teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/tasklists?student=' + username;
    }

    return (dispatch) => {
        dispatch(requestTasklists());
        fetch(url, {
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

export const getSingleTasklist = (username, type, tasklistName) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/gettasklist?tasklistName=' + tasklistName + '&teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/gettasklist?tasklistName=' + tasklistName + '&student=' + username;
    }

    return (dispatch) => {
        dispatch(requestTasklist());

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveTasklist(json)),
                () => dispatch(failedToReceiveTasklist()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const sendTasklist = (username, students, data) => {
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

        fetch(BaseUrl + 'assignments/save/tasklist?teacher=' + username + '&students=' + studentQuery, {
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

export const resetSaveTasklist = () => {
    return (dispatch) => {
        dispatch(resetSave());
    }
};

export const deleteTasklist = (username, type, tasklistName) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/remove/tasklist?tasklistName=' + tasklistName + '&teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/remove/tasklist?tasklistName=' + tasklistName + '&student=' + username;
    }

    return (dispatch) => {
        dispatch(removeTasklist());

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(successfulTasklistRemove(json)),
                () => dispatch(failedTasklistRemove()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const updateTasklist = (username, type, tasklistName, data) => {
    let url = '';
    if (type === 'TEACHER') {
        url = BaseUrl + 'assignments/teacher/updatetasklist?tasklistName=' + tasklistName + '&teacher=' + username;
    } else {
        url = BaseUrl + 'assignments/student/updatetasklist?tasklistName=' + tasklistName + '&student=' + username;
    }

    return (dispatch) => {
        dispatch(updatingTasklist());

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => dispatch(successfulUpdate(json)),
                () => dispatch(failedUpdate()))
            .catch(function(error) {
                console.error(error);
            });
    }
};
