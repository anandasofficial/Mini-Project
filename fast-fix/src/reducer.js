export const initialState = {
    basket: [],
    user: null
  };
const reducer = (state, action) => {
console.log('anand');
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        }
};
export default reducer;