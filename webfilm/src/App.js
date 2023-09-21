import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/admin/AdminLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}