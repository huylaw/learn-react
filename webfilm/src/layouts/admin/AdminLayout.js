import { Outlet } from "react-router-dom";
import Header from "../../components/bases/header/Header";
import Sidebar from "../../components/bases/sidebar/Sidebar";

import "./AdminLayout.scss";
import { useEffect, useState } from "react";

export default function AdminLayout() {
    const [sizeSidebar, setSizeSidebar] = useState(178);
    const [smallSize, setSmallSize] = useState(false);

    const changeSizeSidebar = () => {
        setSmallSize(!smallSize);
        smallSize === true ? setSizeSidebar(52) : setSizeSidebar(178);
        console.log(sizeSidebar, smallSize);
    };

    // useEffect(() => {
    //     changeSizeSidebar();
    // }, []);

    return(
        <div>
            <div className="container-layout">
                <Sidebar width={sizeSidebar} />
                <div 
                    className="main" 
                    style={{width: `calc(100% - ${sizeSidebar}px)`}}
                >
                    <div className="header">
                        <Header/>
                    </div>
                    <div className="content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}