import * as types from "./actionTypes"
import axios from "axios";

export const getElectricianData = (dispatch) => {
    dispatch({type:types.GET_ELECTRICIAN_DATA_REQUEST})

    return axios
    .get("https://downtown-service-pda6.onrender.com/electrician")
    .then(r=>{
        dispatch({
            type:types.GET_ELECTRICIAN_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({type:types.GET_ELECTRICIAN_DATA_FAILURE})
    })  
}
export const getPlumberData = (dispatch) => {
    dispatch({type:types.GET_ELECTRICIAN_DATA_REQUEST})

    return axios
    .get("https://downtown-service-pda6.onrender.com/plumber")
    .then(r=>{
        dispatch({
            type:types.GET_ELECTRICIAN_DATA_SUCCESS,
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({type:types.GET_ELECTRICIAN_DATA_FAILURE})
    })  
}