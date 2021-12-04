import "./style.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBoxes, getImages } from '../../storeFunctions/boxes';
import image from '../../assets/banan.png'
import { ReactComponent as Icon } from '../../assets/vector.svg'


const Boxes = ({ data }) => {
    const {
        count,
        selectedCategory,
    } = useSelector((state) => state);

    useEffect(() => {
        getBoxes(count, selectedCategory?.id);
    }, [selectedCategory, count]);
    return (
        <>
            {data.Box.map((el, i) =>
                <div
                    key={el.id}
                    className="Box"
                >
                    <img src={`${image}`} />
                    <div className="Box-Description">
                        <div className="Box-Description-Content">
                            <span className="Box-Description-Content_title">{el?.title}</span>
                            <span className="Box-Description-Content_lessons">{el?.lessons}</span>
                        </div>
                        <div className="Box-Description_minutes">
                            {el?.min}
                        </div>
                    </div>
                    <a target='_blank' href='https://www.youtube.com/' className="Box-Video">
                        <Icon />
                    </a>
                </div>
            )}
        </>
    );
};

export default Boxes;
