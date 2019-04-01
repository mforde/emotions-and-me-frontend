import {
    RECEIVE_VIDEOURL , REQUEST_VIDEOURL, FAILED_VIDEOURL
} from '../actions';

const defaultState = {
    emotion_url: "",
    isFetching: false,
    hasFailed: false,
};

const videostream = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_VIDEOURL:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_VIDEOURL:
            return {
                ...state,
                emotion_url: action.emotion_url,
                isFetching: false,
            };
        case FAILED_VIDEOURL:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        default:
            return state
    }
};

export default videostream;