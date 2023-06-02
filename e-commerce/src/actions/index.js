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

// export const add_product = () => {
//     return {
//         type : 'add_product'
//     }
// }
// Copy
// export const add_product = () => {
//     return {
//         type: 'add_product'
//     }
// }