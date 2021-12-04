import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

export async function getCategories() {
    const data = [
        {
            id: 1,
            name: 'Popular'
        },
        {
            id: 2,
            name: 'Favorite'
        },
        {
            id: 3,
            name: 'New'
        },
    ];

    store.dispatch(actions.setCategories(data));
}

export function selectCategory(id) {
    store.dispatch(actions.selectCategory(id));
}


export function resetCategory() {
    store.dispatch(actions.resetCategory());
}