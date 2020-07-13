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
    activeCategory: ''
};
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'display':
            let products = state.products.filter(productitem => {
                if (productitem.category == payload) {
                    return { name: productitem.name, category: productitem.category, price: productitem.price, inStock: productitem.inStock, activeCategory: payload };
                }
            });
            let catagory = state.categories.filter(categorieitem => {
                if (categorieitem.name == payload) {
                    return { name: categorieitem.name, displayName: categorieitem.displayName };
                }
            })
            return {
                catagories: state.catagories,products, catagory
            }
        default:
            return state;
    }
}
export const display = (name) => {
    return {
        type: 'display',
        payload: name
    }
}