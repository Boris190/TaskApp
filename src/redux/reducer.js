import * as actionTypes from "./endPoints.js";

const initialState = {
    categories: [],
    count: 3,
    images: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: {
                    id: action.payload.id,
                },
            };

        case actionTypes.SET_BOXES:
            return {
                ...state,
                boxes: action.payload.boxes,
            };

        case actionTypes.LOAD_MORE_IMAGES:
            return {
                ...state,
                images: [...state.images, ...action.payload.images],
            };
        case actionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
            };
        default:
            return state;
    }
}

export default reducer;
