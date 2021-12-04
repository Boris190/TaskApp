import * as actionTypes from "./endPoints";

export const selectCategory = (id) => {
    return {
        type: actionTypes.SELECT_CATEGORY,
        payload: {
            id: id,
        },
    };
};

export const setCategories = (categories) => {
    return {
        type: actionTypes.SET_CATEGORIES,
        payload: {
            categories,
        },
    };
};

export const resetCategory = () => {
    return {
        type: actionTypes.RESET_CATEGORY,
    };
};


export const setBoxes = (images) => {
    return {
        type: actionTypes.SET_BOXES,
        payload: {
            images,
        },
    };
};

export const loadMoreImages = (images) => {
    return {
        type: actionTypes.LOAD_MORE_IMAGES,
        payload: {
            images,
        },
    };
};
export const pageChanged = (page) => {
    return {
        type: actionTypes.PAGE_CHANGED,
        payload: {
            page,
        }
    }
}
