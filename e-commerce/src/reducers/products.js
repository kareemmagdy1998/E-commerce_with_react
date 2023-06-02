
let init_state = {
    products: []
}
export const ProductReducer = (state = init_state, action) =>{
    switch (action.type) {
        case "add_product":
            return {...state,
                products: [...state.products, action.payload]
            }
        default: return state    
    } 
}
// let counter = 1;
// export const ProductReducer = (state = counter, action) =>{
//     switch (action.type) {
//         case "add_product":
//             return state+1;
//         default: return state    
//     } 
// }
