import React, {useEffect} from "react";

// import { connect } from "react-redux";

import { ClipLoader } from 'react-spinners';

import { getKanyeWestQuote } from "../actions"

import { shallowEqual, useSelector, useDispatch  } from 'react-redux';



const KanyeQuote = props => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getKanyeWestQuote())
    // },[])


    // const { isLoading, error, data } = useSelector(state => ({
    //     isLoading: state.isLoading,
    //     error: state.error,
    //     data: state.data
    //   }), shallowEqual);
    //**** */ use when returning multiple values from one object ****//


    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const data = useSelector(state => state.data);



    return (
        <div>
            <button onClick={() => dispatch(getKanyeWestQuote())}>get quote</button>
            {error}
            {isLoading ? <div><ClipLoader /></div> : <div>{data.quote}</div> }
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