import {DATA_LOAD_START, DATA_LOAD_SUCCESS, DATA_LOAD_FAILURE} from "../actions"

export const initialState = {
   isLoading: false,
   error: "",
   data: {name: "Kanye West", quote: ""}
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOAD_START:
          return {
              ...state,
              isLoading: true
          }
       case DATA_LOAD_SUCCESS:
           return {
               ...state,
               isLoading: false,
               data: { ...state.data, quote: `"${action.payload}"` }
           }
       case DATA_LOAD_FAILURE:
           return {
               ...state,
               isLoading: false,
               error: action.payload
           }
      default:
        return state;
    }
  };

  

  export default reducer;