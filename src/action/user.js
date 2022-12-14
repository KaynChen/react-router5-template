import LoginService from "../service/LoginService";
import { LOGIN_FAILURE, LOGIN_SUCCESS, REQUEST } from "./const";

// export const login = (dispatch) => (userInfo) => dispatch({type: LOGIN_SUCCESS, payload: userInfo})
export const login = (userInfo) => dispatch => {
  dispatch({type: REQUEST})
  LoginService.login(userInfo).then(res => {
    // dispatch({type: LOGIN_SUCCESS, payload: res})
    getMoreUserInfo(dispatch, res)
  }, err => {
    dispatch({type: LOGIN_FAILURE, payload: err})
  })
}

export const getMoreUserInfo = (dispatch, userInfo) => {
  LoginService.getMoreUserInfo(userInfo).then(res => {
    dispatch({type: LOGIN_SUCCESS, payload: res})
  }, err => {
    dispatch({type: LOGIN_FAILURE, payload: err})
  })
} 