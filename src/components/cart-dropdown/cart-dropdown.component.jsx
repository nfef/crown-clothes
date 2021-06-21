import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button';
import { selectCartItems } from './../../redux/cart/cart.selectors'

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history }) => (
    
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                
                cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                )
                : (
                    <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));