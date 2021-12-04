import "./style.scss";
import React from "react";
import Boxes from "../../components/mainBox/box";

const MainContent = ({ data }) => {

    return (
        <div className="MainSection">
            <>
                <Boxes data={data} />
            </>
        </div>

    );
};

export default MainContent;
