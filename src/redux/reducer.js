export const initiaState = {
    basket: [],
}

function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[ ...state.basket,action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            return {state}
            break;
        default:
            break;
    }
}

export default reducer;
