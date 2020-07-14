let initialState = {
    products: [
        { name: 'TV', category: 'electronics',description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white)' ,price: 699.00, inStock: 5, url: 'https://cdn.mos.cms.futurecdn.net/78kzT5oZeDve55LifhMHZ3.jpg' },
        { name: 'Radio', category: 'electronics', price: 99.00,description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white) ' ,inStock: 15, url: 'https://thumbs.dreamstime.com/b/old-radio-20059485.jpg' },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25,description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white) ', url: 'https://images.nintendolife.com/aed042e5d372e/polo-pokemon-shirts.original.jpg' },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10,description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white), ', url: 'https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-Socks-White-LB1_1024x1024.jpg?v=1561393817' },
        { name: 'Apples', category: 'food', price: .99, inStock: 500,description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white)', url: 'https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg' },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12,description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white)', url: 'https://www.thesilverlife.com/wp-content/uploads/2019/05/bowl-full-of-eggs.jpg' },
        { name: 'Bread', category: 'food', description:'Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white)', price: 2.39, inStock: 90, url: 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/master/pass/milk-bread.jpg' },
    ],
    productlist: [],
    inventorycount:0

};
export default (state = initialState, action) => {
    
    let { type, payload } = action;
    let productlist;
    switch (type) {
        case 'DISPLAY':
             productlist = state.products.filter(productitem => {
                if (productitem.category === payload) {
                    return true;
                }
            });
            return {

                ...state, productlist
            }
            case 'ITEMCOUNT':
                let products = state.products.map(product=> {
                    if (product.name === payload) {
                        return { name: product.name,category:product.category,description:product.description,price:product.price,url:product.url,inStock:product.inStock-1 };
                    }
                    return product
                })
                 productlist = state.products.filter(productitem => {
                    if (productitem.category === payload) {
                        return true;
                    }
                });
                
                return {

                    ...state, products,productlist
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
export const ITEMCOUNT = (name) => {
    return {
        type: 'ITEMCOUNT',
        payload: name
    }
}