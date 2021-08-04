// import SHOP_DATA from "./shop.data";
import ShopActionTpes from "./shop.types";

const INITIAL_STATE = {
    // collections: SHOP_DATA
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTpes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
};

export default shopReducer;