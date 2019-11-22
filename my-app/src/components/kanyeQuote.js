import React from "react";

import { connect } from "react-redux";

import { ClipLoader } from 'react-spinners';

import { getKanyeWestQuote } from "../actions"



const KanyeQuote = props => {

    console.log(props.data)
    return (
        <div>
            <button onClick={() => {props.getKanyeWestQuote()}}>get quote</button>
            {/* <div>
                {props.loading ? <ClipLoader /> : null}
            </div> */}
            <ClipLoader />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        data: state.data
    }
}

export default connect(mapStateToProps, {getKanyeWestQuote})(KanyeQuote);