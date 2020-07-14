let initialState = {
    productscart: [],
    count:0
};
export default (state = initialState, action) => {

    let { type, payload } = action;
    let productscart;
    switch (type) {
        case 'ADD':
            console.log(payload);
            productscart = state.productscart.push(payload);
            productscart=[...state.productscart];
            return {productscart};
        default:
            return state;
    }
}
export const addcart = (name) => {
    return {
        type: 'ADD',
        payload: name
    }
}