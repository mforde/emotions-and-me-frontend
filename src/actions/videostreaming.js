import BaseUrl from "../constants/BaseUrl";

export const SEND_VIDEOURL = 'SEND_VIDEOURL';
export const SUCCESS_SEND_URL = 'SUCCESS_SEND_URL';
export const FAILED_SEND_URL = 'FAILED_SEND_URL';

export const REQUEST_VIDEOURL = 'REQUEST_VIDEO';
export const RECEIVE_VIDEOURL = 'RECEIVE_VIDEO';
export const FAILED_VIDEOURL = 'FAILED_VIDEO';

export const sendUrl = () => ({
    type: SEND_VIDEOURL
});

export const sentUrl = (data) => ({
    type: SUCCESS_SEND_URL,
    data: data
});

export const failedSendUrl = () => ({
    type: FAILED_SEND_URL
});

export const requestVideo = () => ({
    type: REQUEST_VIDEOURL
});

export const receiveVideo = (data) => ({
    type: RECEIVE_VIDEOURL,
    data: data,
});

export const failedVideo = () => ({
    type: FAILED_VIDEOURL
});

export const sendVideoUrl = (video_url) => {
    return dispatch => {
        dispatch(sendUrl());

        fetch(BaseUrl + 'get_video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: video_url.toString()})
        })
        .then(response => response.json())
        .then(json => dispatch(sentUrl(json)),
            () => dispatch(failedSendUrl()))
        .catch(function(error) {
            console.error(error);
        });
    }
};

export const getProcessedVideo = (id) => {
    return dispatch => {
        dispatch(requestVideo());
        fetch(BaseUrl + 'check_video?id=' + id.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json =>  dispatch(receiveVideo(json)),
            error => dispatch(failedVideo()))
        .catch(function(error) {
            console.error(error);
        })
    }
};
