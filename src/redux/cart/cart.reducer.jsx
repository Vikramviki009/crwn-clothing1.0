import cartActionTypes from "./cart.types";
import { addItemsToCart, countCartItems } from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    itemCount: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload),
                itemCount: countCartItems(state.cartItems)
            }
        default:
            return state
    }
};

export default cartReducer;