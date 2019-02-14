import {
    RECEIVE_VIDEOURL , REQUEST_VIDEOURL,
} from '../actions';

const defaultState = {
    emotion_url: "",

}

const videostream = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_VIDEOURL:
            return {
                ...state,
            }
        case RECEIVE_VIDEOURL:
            return {
                ...state,
                emotion_url: action.emotion_url,
            }
        default:
            return state
    }
}

export default videostream;