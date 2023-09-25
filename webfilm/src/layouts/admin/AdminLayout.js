import { Outlet } from "react-router-dom";
import Header from "../../components/bases/header/Header";
import Sidebar from "../../components/bases/sidebar/Sidebar";

import "./AdminLayout.scss";
import { useEffect, useState } from "react";

export default function AdminLayout() {
    const [sizeSidebar, setSizeSidebar] = useState(178);
    const [smallSize, setSmallSize] = useState(false);

    // hàm callback thay đổi chiều rộng sidebar
    const changeSizeSidebar = () => {
        setSmallSize(!smallSize);
    };

    useEffect(() => {
        smallSize === true ? setSizeSidebar(52) : setSizeSidebar(178);
    }, [smallSize, sizeSidebar]);

    return(
        <div>
            <div className="container-layout">
                <Sidebar width={sizeSidebar} smallSize={smallSize}/>
                <div 
                    className="main" 
                    style={{width: `calc(100% - ${sizeSidebar}px)`}}
                >
                    <div className="header">
                        <Header parentCallback={changeSizeSidebar}/>
                    </div>
                    <div className="content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}