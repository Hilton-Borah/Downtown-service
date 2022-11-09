import * as types from "./actionTypes"

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        isLoading: true,
        isError: false,
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        isLoading: false,
        isError: true,
        products: []
      }



    case types.ADD_PRODUCT_REQUEST:
      return {
        isLoading: true,
        isError: false,
      }
    case types.ADD_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload
      }

    case types.ADD_PRODUCT_FAILURE:
      return {
        isLoading: false,
        isError: true,
        products: []
      }



    case types.EDIT_PRODUCT_REQUEST:
      return {
        isLoading: true,
        isError: false,
      }
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload
      }

    case types.EDIT_PRODUCT_FAILURE:
      return {
        isLoading: false,
        isError: true,
        products: []
      }


    case types.DELETE_PRODUCT_REQUEST:
      return {
        isLoading: true,
        isError: false,
      }
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        products: payload
      }

    case types.DELETE_PRODUCT_FAILURE:
      return {
        isLoading: false,
        isError: true,
        products: []
      }
  }
  return state;
};
