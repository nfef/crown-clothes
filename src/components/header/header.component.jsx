import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from './../../images/crown.svg';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

// import './header.style.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv  } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>

            <OptionLink to='/shop'>Shop</OptionLink>
            <OptionLink to='/contact'>Contact</OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut() }>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
);

// const mapStateToProps = state => ({
//    currentUser: state.user.currentUser,
//    cart: state.cart.hidden
// });

// const mapStateToProps = ( state ) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCurrentUser(state)
// })
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);