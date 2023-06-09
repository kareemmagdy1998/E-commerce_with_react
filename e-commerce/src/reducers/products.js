let user = JSON.parse(localStorage.getItem('token'));
export let init_state = {
    products: [],
    user:{},
    card:[]
}
export const ProductReducer = (state = init_state, action) =>{
    switch (action.type) {
        case "add_product":
            return {...state,
                products: [...state.products, action.payload]
            }
        case "get_products":
            return {...state, products: action.payload }
        case "delete_product":
            return {...state, products: state.products.filter((product) => product.id !== action.payload)}
        case "add_to_card":
            return {...state,
                card: [...state.card ,  action.payload]
            }  
            case "add_quantity":
            return {...state, products: state.products.map((item) => 
                {
                    if(item.id == action.payload)
                {
                    ++item.user_quantity;
                    return item;
                }
                return item;
            
            })}
            case "add_quantity_to_item":
                
            return {...state, card: state.card.map((item) => 
                {
                    let user = JSON.parse(localStorage.getItem('token'));
                    if(item.product.id == action.payload && item.username.email == user.email)
                {
                    item.product.user_quantity = item.product.user_quantity + action.quantity;
                    return item;
                }
                return item;
            
            })}
            case "reduce_quantity_from_item":
            return {...state, card: state.card.map((item) => 
                {
                    let user = JSON.parse(localStorage.getItem('token'));
                    if(item.product.id == action.payload && item.product.user_quantity > 1 && item.username.email == user.email)
                {
                    --item.product.user_quantity;
                    return item;
                }
                return item;
            
            })}
            case "reduce_quantity":
            return {...state, products: state.products.map((item) => 
                {
                    if(item.id == action.payload && item.user_quantity > 1)
                {
                    --item.user_quantity;
                    return item;
                }
                return item;
            
            })}
     
            case "remove_item":
                return{
                    ...state, card: state.card.filter((item) => {
                        if (item.product.id == action.payload && item.username.email == user.email)
                        {
                            return false;
                        }
                        else{
                            return true;
                        }
                    })
                }
                case 'load_card_data':
                    return {
                      ...state,
                      card: action.payload
                    };   

                case 'set_user':
                    return {...state,
                        user: action.payload};
                case 'logout':
                    return {...state,
                        user: {}};      
                       
        default: return state    
    } 
}

