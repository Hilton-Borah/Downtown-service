import axios from "axios"
import * as types from "./actionTypes"

export const getData=(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
    return axios
    .get("https://downtown-service-pda6.onrender.com/women")
    .then((res)=>{
        console.log(res.data)
        dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:res.data})
       
    })
    .catch((err)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })
}
export const getDatam=(dispatch)=>{
    dispatch({type:types.GET_MEN_PRODUCTS_REQUEST})
    return axios
    .get("https://downtown-service-pda6.onrender.com/men")
    .then((res)=>{
        dispatch({type:types.GET_MEN_PRODUCTS_SUCCESS,payload:res.data})
       
    })
    .catch((err)=>{
        dispatch({type:types.GET_MEN_PRODUCTS_FAILURE})
    })
}
