import * as types from "./actionTypes"

const initialState = {
  products: [],
  isAuth:false,
  isLoading: false,
  isLoading1: false,
  isError: false,
};

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case types.GET_PRODUCTS_REQUEST:
    //   return {
    //     isLoading: true,
    //     isError: false,
    //   }
    // case types.GET_PRODUCTS_SUCCESS:
    //   return {
    //     isLoading: false,
    //     isError: false,
    //     products: payload
    //   }
    // case types.GET_PRODUCTS_FAILURE:
    //   return {
    //     isLoading: false,
    //     isError: true,
    //     products: []
    //   }

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
      case types.GET_MEN_PRODUCTS_REQUEST:
      return {
         isLoading: true,
         isError: false,
      }
   case types.GET_MEN_PRODUCTS_SUCCESS:
      return {
         isLoading: false,
         isError: false,
         products: payload
      }
   case types.GET_MEN_PRODUCTS_FAILURE:
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


      case types.GET_ELECTRICIAN_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
            };
        case types.GET_ELECTRICIAN_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                products:payload,
            };
        case types.GET_ELECTRICIAN_DATA_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true,
            };

// loginloginlogin

            case (types.LOGIN_REQUEST):
              return {
                isLoading: true,
                isAuth: false,
                // isError: false,
              }
            case (types.LOGIN_SUCCESS):
              return {
                isAuth:true,
                isLoading: false,
                isError: false,
                token:payload,
              }
            case (types.LOGIN_FAILURE):
              return {
                isLoading: false,
                isError:true,
                // isAuth: false,
              }
          


    // case types.EDIT_PRODUCT_REQUEST:
    //   return {
    //     isLoading: true,
    //     isError: false,
    //   }
    // case types.EDIT_PRODUCT_SUCCESS:
    //   return {
    //     isLoading: false,
    //     isError: false,
    //     products: payload
    //   }

    // case types.EDIT_PRODUCT_FAILURE:
    //   return {
    //     isLoading: false,
    //     isError: true,
    //     products: []
    //   }


    case types.DELETE_PRODUCT_REQUEST:
      return {
        isLoading1: true,
        isError: false,
      }
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        isLoading1: false,
        isError: false,
        products: payload
      }

    case types.DELETE_PRODUCT_FAILURE:
      return {
        isLoading1: false,
        isError: true,
        products: []
      }
  }
  return state;
};
