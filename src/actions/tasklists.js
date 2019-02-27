const LOCAL_ENDPOINT = 'http://localhost:8000/';

export const REQUEST_TASKLISTS = 'REQUEST_TASKLISTS';
export const RECEIVE_TASKLISTS = 'RECEIVE_TASKLISTS';
export const FAILED_RECEIVE_TASKLISTS = 'FAILED_RECEIVE_TASKLISTS';

export const SAVE_TASKLIST = 'SAVE_TASKLIST';
export const FAILED_SAVE = 'FAILED_SAVE';
export const SUCCESSFUL_SAVE = 'SUCCESSFUL_SAVE';

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

export const fetchTasklists = () => {
    return (dispatch) => {
        dispatch(requestTasklists());
        fetch(LOCAL_ENDPOINT + 'assignments/teacher/tasklists?teacher=username', {
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

        fetch(LOCAL_ENDPOINT + 'assignments/save/tasklist?teacher=username&students=' + studentQuery, {
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

