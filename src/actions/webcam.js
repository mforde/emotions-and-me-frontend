const VIDEO_WIDTH = 600;
const VIDEO_HEIGHT = 500;

export const REQUEST_WEBCAM = 'REQUEST_WEBCAM';
export const RECEIVE_WEBCAM_STREAM = 'RECEIVE_WEBCAM_STREAM';
export const FAILED_RECEIVE_WEBCAM = 'FAILED_RECEIVE_WEBCAM';

export const requestWebcam = () => ({
    type: REQUEST_WEBCAM
})

export const receiveWebcam = stream => {
  return {
    type: RECEIVE_WEBCAM_STREAM,
    stream,
  }
}

export const failToReceiveWebcam = () => {
    return {
        type: FAILED_RECEIVE_WEBCAM
    }
}

export const getWebcamStream = () => {
    return dispatch => {
        dispatch(requestWebcam())

        navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                facingMode: 'user',
                width: VIDEO_WIDTH,
                height: VIDEO_HEIGHT,
            }
        })
          .then(
              stream => {
                  dispatch(receiveWebcam(stream))
              },
              () => dispatch(failToReceiveWebcam())
          )
    }
}
