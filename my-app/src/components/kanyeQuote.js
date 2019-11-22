import React from "react";

import { connect } from "react-redux";

import { ClipLoader } from 'react-spinners';

import { getKanyeWestQuote } from "../actions"

import { shallowEqual, useSelector, useDispatch  } from 'react-redux';



const KanyeQuote = props => {

    const dispatch = useDispatch();

    console.log(props)

    const { isLoading, error, data } = useSelector(state => ({
        isLoading: state.isLoading,
        error: state.error,
        data: state.data
      }), shallowEqual);



    return (
        <div>
            <button onClick={() => dispatch(getKanyeWestQuote())}>get quote</button>
            {error}
            {isLoading ? <ClipLoader /> : <div>{data.quote}</div> }
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         isLoading: state.isLoading,
//         error: state.error,
//         data: state.data
//     }
// }



export default KanyeQuote;

//connect(mapStateToProps, {getKanyeWestQuote})(KanyeQuote);