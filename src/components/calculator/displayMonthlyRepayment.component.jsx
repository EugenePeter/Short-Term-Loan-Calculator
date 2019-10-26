
import React from "react";

const DisplayMonthlyRepayment = ({calculateMonthlyPayment, text }) => {
return (
        <div className="test">
            <h4>{calculateMonthlyPayment}</h4>
            <small>{text}</small>
        </div>

    );
};



export default DisplayMonthlyRepayment;