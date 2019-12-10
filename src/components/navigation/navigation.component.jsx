import React, { Fragment } from 'react';

import{ Nav, NavItems, NavItemsInner, LogoContainer } from './navigation.styles'

const Navigation = () => {

    return (
        <Fragment>
            <Nav>
                <LogoContainer>test</LogoContainer>
                <NavItems>
                    <NavItemsInner>SIGN OUT</NavItemsInner>
                </NavItems>
            </Nav>
        </Fragment>
    );
};

export default Navigation;