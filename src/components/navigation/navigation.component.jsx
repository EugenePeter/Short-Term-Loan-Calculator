import React, { Fragment } from 'react';

import{ Nav, NavItems, NavItemsInner, LogoContainer } from './navigation.styles'

import { auth } from '../firebase/firebase.utils';
import { a } from '../redux/calculator/repayment-amount/repayment-amount.selector';

const Navigation = ({ currentUser }) => {

    return (
        <Fragment>
            <Nav>
                <LogoContainer>test</LogoContainer>
                <NavItems>
                    <NavItemsInner onClick={() => auth.signOut() } >SIGN OUT</NavItemsInner>
                </NavItems>
            </Nav>
        </Fragment>
    );
};

export default Navigation;