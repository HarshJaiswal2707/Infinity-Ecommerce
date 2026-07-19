import * as actionType from '../constants/cartConstant';
export const cartProductsReducer = (
    state = { cartItems: [] },
    action
) => {
    switch (action.type) {

        case actionType.ADD_TO_CART:

            const item = action.payload;

            const exist = state.cartItems.find(
                product => product.id === item.id
            );

            if (exist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(data =>
                        data.id === item.id ? item : data
                    )
                };
            }

            return {
                ...state,
                cartItems: [...state.cartItems, item]
            };

        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    product => product.id !== action.payload
                )
            };

        case actionType.RESET_CART:
            return {
                cartItems: []
            };

        case actionType.ADD_TO_CART_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: Number(item.quantity) + 1 }
                        : item
                )
            };
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? {
                            ...item,
                            quantity: Math.max(1, item.quantity - 1)
                        }
                        : item
                )
            };
        default:
            return state;
    }
};