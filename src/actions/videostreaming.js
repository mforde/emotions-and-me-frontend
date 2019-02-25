import BaseUrl from "../constants/BaseUrl";

export const REQUEST_VIDEOURL = 'REQUEST_VIDEOURL';
export const RECEIVE_VIDEOURL = 'RECEIVE_VIDEOURL';

export const requesturl = () => {
    return {
        type: REQUEST_VIDEOURL,
    }
}

export const receiveurl = (url) => {
    return {
    type: RECEIVE_VIDEOURL,
    emotion_url: url,
  }
}

export const fetchurl = (video_url) => {
    return dispatch => {

        fetch(BaseUrl + 'get_video', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',

          },
          body: JSON.stringify({debug:video_url.toString()})
        })
          .then(function(response) {
        return response.json(); // parses json

    })
          .then(function(myJson) {

        dispatch(receiveurl(myJson));
    })

    }

}
