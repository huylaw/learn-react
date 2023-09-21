import BreadCrum from "../../components/items/breadcrum/BreadCrum";
import "./Home.scss";

export default function Home(){
    return(
        <div className="container-home">
            <BreadCrum title="Trang chủ"/>
            <div className="view-home">
                Test
            </div>
        </div>
    );
}