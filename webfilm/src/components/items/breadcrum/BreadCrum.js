import "./BreadCrum.scss";

export default function BreadCrum({ title }) {

    return(
        <div className="container-breadcrum">
            <h2>{title}</h2>
        </div>
    );
}