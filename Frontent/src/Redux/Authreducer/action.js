import * as types from "./actionTypes"
import axios from "axios";

export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post("https://tame-gold-cricket-yoke.cyclic.app/user/register", data)
        .then((res) => {
            
           return dispatch({ type: types.REGISTRATION_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.REGISTRATION_FAILURE })
        })
}



export const verifyOtp = (data) => (dispatch) => {
    dispatch({ type: types.OTP_REQUEST })
    return axios.post("https://tame-gold-cricket-yoke.cyclic.app/user/verifyotp", data)
        .then((res) => {
            
          return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.OTP_FAILURE })
        })
}


export const resendOtp = (data) => (dispatch) => {
    dispatch({ type: types.OTP_REQUEST })
    return axios.post("https://tame-gold-cricket-yoke.cyclic.app/user/resendotp", data)
        .then((res) => {
            
          return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.OTP_FAILURE })
        })
}
