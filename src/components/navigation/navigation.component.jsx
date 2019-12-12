import React, { Fragment } from 'react';

import{ Nav, NavItems, NavItemsInner, LogoContainer } from './navigation.styles'

import { auth } from '../firebase/firebase.utils';

const Navigation = ({ currentUser }) => {
    console.log("from nav " + currentUser);
    return (
        <Fragment>
            <Nav>
                <LogoContainer to='/'>test</LogoContainer>
                <NavItems>
                    {
                        currentUser ? 
                        (<NavItemsInner as='div' onClick={() => auth.signOut()}>SIGN OUT</NavItemsInner>)
                        : (<NavItemsInner to='/signin'>signin</NavItemsInner>)
                    }
                </NavItems>
            </Nav>
        </Fragment>
    );
};

export default Navigation;