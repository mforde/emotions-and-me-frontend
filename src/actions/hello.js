import BaseUrl from "../constants/BaseUrl";

export const REQUEST_ALL_NAMES = 'REQUEST_ALL_NAMES';
export const RECEIVE_ALL_NAMES = 'RECEIVE_ALL_NAMES';

export const requestAllNames = () => ({
    type: REQUEST_ALL_NAMES
})

export const receiveAllNames = json => {
  return {
    type: RECEIVE_ALL_NAMES,
    names: json,
  }
}

export const fetchAllNames = () => {
    return dispatch => {
        dispatch(requestAllNames())

        fetch(BaseUrl, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })
          .then(response => response.json())
          .then(json => dispatch(receiveAllNames(json)))
    }
}
