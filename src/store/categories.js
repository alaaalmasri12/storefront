let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: '',
    productlist:[]

};
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'DISPLAY':
            let  productlist = state.products.filter(productitem => {
                if (productitem.category === payload) {
                  return true;
                }
                // return productitem;
            });
            // let  categories = state.categories;
            let activeCategory=payload;
            return {
            
            ...state,activeCategory,productlist
            }
        default:
            return state;
    }
}
export const display = (name) => {
    return {
        type: 'DISPLAY',
        payload: name
    }
}