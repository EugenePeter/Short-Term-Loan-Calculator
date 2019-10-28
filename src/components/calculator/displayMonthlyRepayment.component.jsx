
import React from "react";
import 'normalize.css';

const DisplayMonthlyRepayment = ({calculateMonthlyPayment, text }) => {
return (
        <div className="test">
            <h2>{calculateMonthlyPayment}</h2>
            <small>{text}</small>
        </div>

    );
};



export default DisplayMonthlyRepayment;