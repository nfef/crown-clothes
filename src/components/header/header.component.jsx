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

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">

            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut() }>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
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