export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            ({...cartItemToAdd, quantity: cartItem.quantity + 1}) :
            cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const countCartItems = (cartItems) => (
    cartItems.reduce((acc, item) => acc+item.quantity,1)
);