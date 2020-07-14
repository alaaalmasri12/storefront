let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: ''

};
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'DISPLAY':
            // let  categories = state.categories;
            let activeCategory = payload;
            return {

                ...state, activeCategory
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