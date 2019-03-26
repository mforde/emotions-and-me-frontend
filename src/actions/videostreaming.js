import BaseUrl from "../constants/BaseUrl";

export const REQUEST_VIDEOURL = 'REQUEST_VIDEOURL';
export const RECEIVE_VIDEOURL = 'RECEIVE_VIDEOURL';
export const FAILED_VIDEOURL = 'FAILED_VIDEOURL';

export const requesturl = () => {
    return {
        type: REQUEST_VIDEOURL,
    }
};

export const receiveurl = (url) => {
    return {
        type: RECEIVE_VIDEOURL,
        emotion_url: url,
    }
};

export const failedurl = () => {
    return {
        type: FAILED_VIDEOURL
    }
};

export const fetchurl = (video_url) => {
    return dispatch => {
        dispatch(requesturl());

        fetch(BaseUrl + 'get_video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: video_url.toString()})
        })
            .then(response => response.json())
            .then(json => dispatch(receiveurl(json)),
                () => dispatch(failedurl()))
            .catch(function(error) {
                console.error(error);
            });
    }
};
