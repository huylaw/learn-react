import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = {
        'token': false,
    }

    return(
        !auth.token ? <Navigate to="/login"/> : <Outlet/>
    );
}

export default PrivateRoutes;