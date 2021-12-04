import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

export async function getBoxes(count, category_id, animated) {
    const url = !category_id
        ? `limit=${count}&page=1&order=ASC`
        : `limit=${count}&category_ids=${category_id}&page=1&order=ASC`;
    const boxes = [
        {
            title: 'Illustration',
            lessons: '24 lessons',
            id: 2,
            min: '134 min',
            favorive: false,
            img: 'banan.png'
        },
        {
            title: 'Graphic design',
            lessons: '50 lessons',
            min: '236 min',
            id: 3,
            favorive: true,
            img: 'boxImage.png'
        },
        {
            title: 'UI/Ui',
            lessons: '10 lessons',
            min: '300 min',
            id: 4,
            favorive: false,
            img: 'banan.png'
        },
        {
            title: 'Front-Ened',
            lessons: '5 lessons',
            min: '1000 min',
            id: 5,
            favorive: true,
            img: 'banan.png'
        },
        {
            title: 'Illustration',
            lessons: '24 lessons',
            min: '134 min',
            id: 6,
            favorive: true,
            img: 'banan.png'
        },
    ]

    store.dispatch(actions.setBoxes(boxes));
}

export function setPage(page) {
    store.dispatch(actions.pageChanged(page));
}


