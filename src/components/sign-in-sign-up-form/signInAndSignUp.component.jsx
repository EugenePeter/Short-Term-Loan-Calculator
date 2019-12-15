import React, { Component, Fragment} from 'react';

import 'normalize.css';

import SignIn from '../Form/sign-in/signIn.component';

class SignInAndSignUp extends Component {
    constructor() {
        super();

        this.state = {
            continue: false
        };
    }


    render() {
        const { children, ...props} = this.props
        return(
            <Fragment>
                <SignIn></SignIn>
            </Fragment>
        );
    }
}

export default SignInAndSignUp;