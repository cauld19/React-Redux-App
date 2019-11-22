import axios from "axios";

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const getKanyeWestQuote = () => dispatch => {
    dispatch({ type: DATA_LOAD_START });

    axios
        .get("https://api.kanye.rest")
        .then(res => 
            dispatch ({
                type: DATA_LOAD_SUCCESS,
                payload: res.data.quote
            })
        )
        .catch(err => {
            dispatch({
                type: DATA_LOAD_FAILURE,
                payload: "Error loading quote"
            })
        })
}