import {
    REQUEST_WEBCAM, RECEIVE_WEBCAM_STREAM, FAILED_RECEIVE_WEBCAM,
} from '../actions';

const defaultState = {
    isFetching: false,
    hasFailed: false,
    webcamStream: new MediaStream(),
}

const webcam = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_WEBCAM:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVE_WEBCAM_STREAM:
            return {
                ...state,
                isFetching: false,
                webcamStream: action.stream,
            }
        case FAILED_RECEIVE_WEBCAM:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            }
        default:
            return state
    }
}

export default webcam;