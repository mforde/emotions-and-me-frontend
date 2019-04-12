import {
    SEND_VIDEOURL, SUCCESS_SEND_URL, FAILED_SEND_URL,
    REQUEST_VIDEOURL, RECEIVE_VIDEOURL, FAILED_VIDEOURL
} from '../actions';

const defaultState = {
    video_id: "",
    video_url: "",
    status: "",
    yt_url: "",
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
                video_id: action.data.id,
                video_url: action.data.saved_path,
                status: action.data.status,
                yt_url: action.data.original_url,
                isFetching: false,
            };
        case FAILED_VIDEOURL:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        case SEND_VIDEOURL:
            return {
                ...state,
                isFetching: true,
                status: "",
            };
        case SUCCESS_SEND_URL:
            return {
                ...state,
                video_id: action.data.id,
                video_url: action.data.saved_path,
                status: action.data.status,
                yt_url: action.data.original_url,
                isFetching: false,
            };
        case FAILED_SEND_URL:
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