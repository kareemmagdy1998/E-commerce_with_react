export const add_product = (product) => {
    return {
        type : 'add_product',
        payload : product
    }
};
export const get_products = (prods) =>
{
    return {
        type : 'get_products',
        payload : prods
    }
}

export const delete_product = (id) =>
{
    return {
        type : 'delete_product',
        payload : id
    }
}
export const add_to_card = (product , username) => {
    const product_w_username ={product, username : username}
    return {
        type : 'add_to_card',
        payload : product_w_username, 
    }
};
export const add_quantity = (id) => {
    return {
        type : 'add_quantity',
        payload : id
    }
};
export const reduce_quantity = (id) => {
    return {
        type : 'reduce_quantity',
        payload : id
    }
    

};
export const remove_item = (id) => {
    return {
        type : 'remove_item',
        payload : id
    }
    

};
export const load_card_data = (data) => {
    return {
      type: 'load_card_data',
      payload: data
    };
  };
  export const add_quantity_to_item = (id , quantity = 1) => {
    return {
        type : 'add_quantity_to_item',
        payload : id,
        quantity : quantity
    }
};
export const reduce_quantity_from_item = (id) => {
    return {
        type : 'reduce_quantity_from_item',
        payload : id
    }
};
export const get_card = (username) => {
    return {
        type : 'get_card',
        payload : username
    }
};
export const set_user = (user) => {
    return {
        type : 'set_user',
        payload : user
    }
};
export const log_out = () => {
    return {
        type : 'log_out',
    }
};