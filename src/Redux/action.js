//Write the action creator functions here

import axios from "axios"
import * as types from "./actionTypes"



const postData = (data,category) => (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT_REQUEST })
    axios.post(`https://downtown-service-pda6.onrender.com/${category}`, data)
        .then((res) => {
            dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: types.ADD_PRODUCT_FAILURE })
        })
}


// import * as types from "./actionTypes"
// import axios from "axios";

 const getElectricianData = (dispatch) => {
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
 const getPlumberData = (dispatch) => {
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


export {postData,getElectricianData,getPlumberData}


// const getData=()=>(dispatch)=>{
//     dispatch({type:types.GET_PRODUCTS_REQUEST})
//     axios.get("http://localhost:8080/products")
//     .then((res)=>{
//         dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:res.data})
//         getData(queryparams)
//     })
//     .catch((err)=>{
//         dispatch({type:types.GET_PRODUCTS_FAILURE})
//     })
// }


// const updatedata=(id,text)=>(dispatch)=>{
//     dispatch({type:types.EDIT_PRODUCT_REQUEST});
//     axios.patch(`http://localhost:8080/products/${id}`,text)
//     .then((res)=>{
//         dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:res.data})
//         dispatch(getData)
//     })
//     .catch((err)=>{
//         console.log(err)
//         dispatch({type:types.EDIT_PRODUCT_FAILURE})
//     })
// }

// const deletedata=(id)=>(dispatch)=>{
//     dispatch({type:types.DELETE_PRODUCT_REQUEST});
//     axios.delete(`http://localhost:8080/products/${id}`)
//     .then((res)=>{
//         console.log(res.data)
//         dispatch({type:types.DELETE_PRODUCT_SUCCESS,payload:res.data})
//         dispatch(getData)
//     })
//     .catch((err)=>{
//         console.log(err)
//         dispatch({type:types.DELETE_PRODUCT_FAILURE})
//     })
// }

// export { getData, postData, updatedata, deletedata }