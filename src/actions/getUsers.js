const LOCAL_ENDPOINT = 'http://localhost:8000/';

export const REQUEST_STUDENTS = 'REQUEST_STUDENTS';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const FAILED_RECEIVE_STUDENTS = 'FAILED_RECEIVE_STUDENTS';

export const REQUEST_TEACHER = 'REQUEST_TEACHER';
export const RECEIVE_TEACHER = 'RECEIVE_TEACHER';
export const FAILED_RECEIVE_TEACHER = 'FAILED_RECEIVE_TEACHER';

export const ADD_STUDENT = 'ADD_STUDENT';
export const SUCCESSFUL_ADD_STUDENT = 'SUCCESSFUL_ADD_STUDENT';
export const FAILED_ADD_STUDENT = 'FAILED_ADD_STUDENT';

export const requestStudents = () => ({
    type : REQUEST_STUDENTS
});

export const receiveStudents = json => ({
    type: RECEIVE_STUDENTS,
    data: json,
});

export const failedReceiveStudents = () => ({
    type: FAILED_RECEIVE_STUDENTS,
});

export const requestTeacher = () => ({
    type : REQUEST_TEACHER
});

export const receiveTeacher = json => ({
    type: RECEIVE_TEACHER,
    data: json,
});

export const failedReceiveTeacher = () => ({
    type: FAILED_RECEIVE_TEACHER,
});

export const addStudent = () => ({
    type : ADD_STUDENT
});

export const successfulAddStudent = (data) => ({
    type: SUCCESSFUL_ADD_STUDENT,
    data: data
});

export const failedAddStudent =() => ({
    type: FAILED_ADD_STUDENT
});

export const fetchStudents = () => {
    return (dispatch) => {
        dispatch(requestStudents());
        fetch(LOCAL_ENDPOINT + 'assignments/teacher/getStudents?teacher=username', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveStudents(json)),
                () => dispatch(failedReceiveStudents()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const fetchTeacher = () => {
    return (dispatch) => {
        dispatch(requestTeacher());
        fetch(LOCAL_ENDPOINT + 'assignments/student/getTeachers?student=studentUser1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveTeacher(json)),
                () => dispatch(failedReceiveTeacher()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

export const addStudentToTeacher = (students) => {
    return (dispatch) => {
        dispatch(addStudent());

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

        fetch(LOCAL_ENDPOINT + 'assignments/teacher/addStudents?teacher=username&students=' + studentQuery, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
//                'Authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(json => dispatch(successfulAddStudent(json)),
                () => dispatch(failedAddStudent()))
            .catch(function(error) {
                console.error(error);
            });
    }
};

