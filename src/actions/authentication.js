const LOGIN_ENDPOINT = 'http://localhost:8000/token-auth/'
const SIGNUP_ENDPOINT = 'http://localhost:8000/core/users/'
const CURRENT_USER_ENDPOINT = 'http://localhost:8000/core/current_user/'

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const RECEIVE_SIGNUP = 'RECEIVE_SIGNUP';
export const FAILED_SIGNUP = 'FAILED_SIGNUP';

export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const FAILED_CURRENT_USER = 'FAILED_CURRENT_USER';

export const requestLogin = () => ({
    type: REQUEST_LOGIN
})

export const receiveLogin = json => {
  localStorage.setItem('token', json.token);
  return {
    type: RECEIVE_LOGIN,
    token: json.token,
    user: json.user,
  }
}

export const failLogin = failedResponse => {
    return {
        type: FAILED_LOGIN,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
}

export const handleLoginAttempt = (e, data) => {
    return dispatch => {
        dispatch(requestLogin())
        e.preventDefault();
        fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            return response.json().then(responseJson => {
              dispatch(receiveLogin(responseJson))
            })
          } else {
            dispatch(failLogin(response))
          }
        })
    }
}

export const requestSignup = () => ({
  type: REQUEST_SIGNUP,
})

export const receiveSignup = json => {
  localStorage.setItem('token', json.token);
  return {
    type: RECEIVE_SIGNUP,
    token: json.token,
    user: {
      username: json.email,
      first_name: json.first_name,
      last_name: json.last_name,
      email: json.email,
    },
  }
}

export const failSignup = failedResponse => {
    return {
        type: FAILED_SIGNUP,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
}

export const handleSignupAttempt = (e, data) => {
  return dispatch => {
    dispatch(requestSignup())
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
}

export const requestCurrentUser = () => ({
  type: REQUEST_CURRENT_USER,
})

export const receiveCurrentUser = json => {
  return {
    type: RECEIVE_CURRENT_USER,
    token: localStorage.getItem('token', json.token),
    user: {
      username: json.email,
      first_name: json.first_name,
      last_name: json.last_name,
      email: json.email,
    },
  }
}

export const failedCurrentUser = failedResponse => {
    return {
        type: FAILED_CURRENT_USER,
        status: failedResponse.status,
        statusText: failedResponse.statusText,
    }
}

export const handleCheckToken = () => {
  return dispatch => {
    dispatch(requestCurrentUser())
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
}

