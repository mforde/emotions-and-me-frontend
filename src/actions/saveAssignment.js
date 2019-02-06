const LOCAL_ENDPOINT = 'http://localhost:8000/'

export const SAVE_ASSIGNMENT = 'SAVE_ASSIGNMENT';

export const saveAssignment = () => ({
    type : SAVE_ASSIGNMENT
})

export const sendAssignment = (data) => {
    fetch(LOCAL_ENDPOINT + 'assignments/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((responseJson) => {
            alert(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
}