
import React, { Fragment } from "react";
import 'normalize.css';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';


import { createStructuredSelector } from 'reselect'


import CustomButton from '../../components/custom-button/custom-button.component';


const Warning = ({history}) => {



    return (

        <Fragment>
            <h2>Warning about borrowing</h2>
            <p>Borrowing can be expensive</p>
            <CustomButton onClick={(event) => {
                event.preventDefault();
                history.push('./main-application')
            }} warning > CONTINUE</CustomButton>
        </Fragment>
    );
};



export default withRouter(Warning);