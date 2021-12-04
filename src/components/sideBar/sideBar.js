import "./style.scss";
import React, { useState } from "react";
import { ReactComponent as Dashborad } from '../../assets/dashborad.svg'


const SideBar = ({ data, setTab }) => {
    const [active, setActive] = useState(0)

    return (
        <>
            <div className="SideBar">
                <div className="SideBar-Links">
                    {
                        data.map((el, i) =>
                            <button
                                key={i}
                                onClick={() => { setActive(i); setTab(el.text) }}
                                className={`${active === i ? 'active' : ''}`} key={el.id}> <Dashborad /></button>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default SideBar;
