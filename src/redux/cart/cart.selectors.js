import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector, pour récupérer l'élément souhaité depuis le state global

export const selectCartItems = createSelector( // output selector
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector( // output selector
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0) //  is the initial value
);