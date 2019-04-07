import BaseUrl from "../constants/BaseUrl";

const LOGIN_ENDPOINT = BaseUrl +  'token-auth/';
const SIGNUP_ENDPOINT = BaseUrl + 'core/users/';
const CURRENT_USER_ENDPOINT = BaseUrl + 'core/current_user/';
const REFRESH_TOKEN_ENDPOINT = BaseUrl + 'token-refresh/';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const FAILED_SIGNUP = 'FAILED_SIGNUP';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const FAILED_TOKEN = 'FAILED_TOKEN';

export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const FAILED_CURRENT_USER = 'FAILED_CURRENT_USER';


export const requestLogin = () => ({
    type: REQUEST_LOGIN
});

export const receiveLogin = json => {
    return {
        type: RECEIVE_LOGIN,
        token: json.token,
        user: json.user,
    }
};

export const failLogin = failedResponse => {
    return {
        type: FAILED_LOGIN,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
};

export const requestSignup = () => ({
    type: REQUEST_SIGNUP,
});

export const requestToken = (tokenPromise) => ({
    type: REQUEST_TOKEN,
    tokenPromise
});

export const receiveToken = (json) => ({
    type: RECEIVE_TOKEN,
    token: json.token,
    user: json.user,
});

export const failedToken = () => ({
    type: FAILED_TOKEN,
});

export const receiveSignup = json => {
    return {
        type: RECEIVE_SIGNUP,
        token: json.token,
        user: json.user,
    }
};

export const failSignup = failedResponse => {
    return {
        type: FAILED_SIGNUP,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
};

export const requestCurrentUser = () => ({
    type: REQUEST_CURRENT_USER,
});

export const receiveCurrentUser = json => {
    return {
        type: RECEIVE_CURRENT_USER,
        user: json,
    }
};

export const failedCurrentUser = failedResponse => {
    return {
        type: FAILED_CURRENT_USER,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
};

export const handleLoginAttempt = (e, data) => {
    return dispatch => {
        dispatch(requestLogin());
        e.preventDefault();
        fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => dispatch(receiveLogin(json)),
                json => dispatch(failLogin(json)))
            .catch(function (error) {
                console.error(error);
            });
    }
};

export const handleSignupAttempt = (e, data) => {
  return dispatch => {
    dispatch(requestSignup());
    e.preventDefault();
    fetch(SIGNUP_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json().then(responseJson => {
          dispatch(receiveSignup(responseJson))
        })
      } else {
        dispatch(failSignup(response))
      }
    })
  }
};

export const handleCheckToken = () => {
    return dispatch => {
        dispatch(requestCurrentUser());
        fetch(CURRENT_USER_ENDPOINT, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json().then(responseJson => {
                        dispatch(receiveCurrentUser(responseJson))
                    })
                } else {
                    dispatch(failedCurrentUser(response))
                }
            })
    }
};

export const refreshJWTToken = (dispatch) => {
    const freshTokenPromise = fetch(REFRESH_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            'token': JSON.stringify(localStorage.getItem('token'))
        }
    })
        .then(t => {
            dispatch(receiveToken(t));

            return t.token ? Promise.resolve(t.token) : Promise.reject({
                message: 'could not refresh token'
            });
        })
        .catch(e => {
            console.log('error refreshing token', e);
            dispatch(failedToken());
            return Promise.reject(e);
        });

    dispatch(requestToken(freshTokenPromise));

    return freshTokenPromise;
};
