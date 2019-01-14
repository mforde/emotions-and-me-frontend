import {
    REQUEST_WEBCAM, RECEIVE_WEBCAM_STREAM,
} from '../actions';

const defaultState = {
    isFetching: false,
    webcamStream: new MediaStream(),
}

const allNames = ( state = defaultState, action) => {
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
        // case FAILED_RECEIVE_WEBCAM:
        //     return {
        //         ...state,
        //         isFetching: false,
        //     }
        default:
            return state
    }
}

export default allNames;