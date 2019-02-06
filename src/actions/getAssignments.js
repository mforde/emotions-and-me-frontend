const LOCAL_ENDPOINT = 'http://localhost:8000/'

export const SAVE_QUIZ = 'SAVE_QUIZ';
export const REQUEST_ASSIGNMENTS = 'REQUEST_ASSIGNMENTS';
export const RECEIVE_ASSIGNMENTS = 'RECEIVE_ASSIGNMENTS';

export const requestAssignments = () => ({
    type : REQUEST_ASSIGNMENTS
})

export const receiveAssignments = json => {
    return {
        type: RECEIVE_ASSIGNMENTS,
        data: json,
    }
}

export const fetchAssignments = () => {
    return dispatch => {
        fetch(LOCAL_ENDPOINT + 'assignments/teacher?query=teacher', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(json => dispatch(receiveAssignments(json)))
            .catch(function(error) {
                console.log(error);
            });
    }
}

/*export const sendQuizData = () => {
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'teacher': this.state.teacher,
            'students': this.state.selectedStudents,
            'quizName': values.quizName,
            'quizData': values.questions
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            alert(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
}*/