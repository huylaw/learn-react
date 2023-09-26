import { Outlet } from "react-router-dom";
import './AuthLayout.scss';

export default function AuthLayout(){
    return(
        <div className="container-auth-layout">
            <Outlet/>
        </div>
    );
}