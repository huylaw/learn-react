import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminLayout from "./layouts/admin/AdminLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Page404 from "./pages/page404/Page404";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import AuthLayout from "./layouts/auth/AuthLayout";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<AdminLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="user" element={<User/>}>
                        <Route path=":id" element={<User/>}/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Route> */}
                <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<AdminLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="user" element={<User/>}>
                            <Route path=":id" element={<User/>}/>
                        </Route>
                        <Route path="*" element={<Page404/>}/>
                    </Route>
                </Route>
                <Route path="/" element={<AuthLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}