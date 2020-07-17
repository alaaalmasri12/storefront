let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, url: 'https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg' },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, url: 'https://thumbs.dreamstime.com/b/old-radio-20059485.jpg' },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, url: 'https://images.nintendolife.com/aed042e5d372e/polo-pokemon-shirts.original.jpg' },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, url: 'https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-Socks-White-LB1_1024x1024.jpg?v=1561393817' },
        { name: 'Apples', category: 'food', price: .99, inStock: 500, url: 'https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg' },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, url: 'https://www.thesilverlife.com/wp-content/uploads/2019/05/bowl-full-of-eggs.jpg' },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90, url: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg' },
    ],
    activeCategory: '',
    productlist: []

};
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'DISPLAY':
            let productlist = state.products.filter(productitem => {
                if (productitem.category === payload) {
                    return true;
                }
                // return productitem;
            });
            // let  categories = state.categories;
            let activeCategory = payload;
            return {

                ...state, activeCategory, productlist
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