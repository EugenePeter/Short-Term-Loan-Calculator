import React, { Fragment } from 'react';

import{ Nav, NavItems, NavItemsInner, LogoContainer } from './navigation.styles'

import SignUp from '../Form/sign-up/sign-up.component';

import { auth } from '../firebase/firebase.utils';

import { connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';

const Navigation = ({ currentUsers }) => {
    console.log("from nav " + currentUsers);
    return (
        <Fragment>
            <Nav>
                <LogoContainer to='/'>test</LogoContainer>
                <NavItems>
                    {
                        currentUsers ? 
                        (<NavItemsInner as='div' onClick={() => auth.signOut()}>SIGN OUT</NavItemsInner>)
                        : (<NavItemsInner to='/signin'>signin</NavItemsInner>
                         )
                    }
                    {
                        currentUsers ? 
                        (<NavItemsInner as='div' onClick={() => auth.signOut()}>SIGN OUT</NavItemsInner>)
                        : (<NavItemsInner to='/signup'>signup</NavItemsInner>
                         )
                    }
              
                </NavItems>
            </Nav>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUsers: selectCurrentUser, 
})

export default connect(mapStateToProps)(Navigation);