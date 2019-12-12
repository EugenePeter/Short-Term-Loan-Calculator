
import React, { Fragment } from "react";
import 'normalize.css';
import './calculator.component.scss';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect'

import { schedule, repayment, durationOfLoan } from '../redux/calculator/repayment-amount/repayment-amount.selector';


const Warning = ({ durationOfLoan, repayment }) => {



    return (

        <Fragment>
            <h2>Warning</h2>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({ 
    durationOfLoan,
    repayment
});

export default connect(mapStateToProps)(Warning);