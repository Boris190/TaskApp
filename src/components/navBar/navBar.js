import "./style.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    getCategories,
    resetCategory,
    selectCategory
} from '../../storeFunctions/categories';
import { setPage } from "../../storeFunctions/Boxes";


const NavBar = ({ tab }) => {
    const [active, setActive] = useState(0)
    const { categories, selectedCategory } = useSelector((state) => state);

    const getSelectedCategory = (id) => {
        resetCategory();
        selectCategory(id);
        // setPage(1);
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <div className="NavigationBar">
                <div className="NavigationBar-Title">
                    {!tab ? 'TITLE' : tab}
                </div>
                <div className="NavigationBar-Links">
                    {
                        categories.map((el, i) =>
                            <button
                                onClick={() => { setActive(i); getSelectedCategory(el.id) }}
                                className={`${active === i ? 'active' : ''}`} key={el.id}>{el.name}</button>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;
