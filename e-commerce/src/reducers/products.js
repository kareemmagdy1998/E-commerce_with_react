
export let init_state = {
    products: [],
    users:[]
}
export const ProductReducer = (state = init_state, action) =>{
    switch (action.type) {
        case "add_product":
            return {...state,
                products: [...state.products, action.payload]
            }
        case "get_products":
            return {...state, products: action.payload }
        default: return state    
    } 
}

