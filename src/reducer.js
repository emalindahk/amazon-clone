export const initialState = {
    basket: [{
        id : 23674753,
        title : "She's With Me (With Me (1))",
        price : 2300,
        rating : 5,
        image : "https://m.media-amazon.com/images/I/81hkvZ3E5tL._AC_UL320_.jpg"
        
    }],
    user: null,
}
const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding stuff to basket
            return {
                 ...state,
                 basket: [...state.basket, action.item]
                };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item to basket
            console.log(action);
            //clone the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id)

            if (index >= 0){
                //if item exists remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                     `Can't remove product (id: ${action.id}) as its not in the basket`
                );
            }
            return { 
                ...state,
                basket: newBasket,
             };
        default:
            return state;
    }
}


export default reducer;