import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';
import "./Modal.scss";

const Modal = (props) =>
    props.isVisible ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="container-modal">
                <div 
                    className="modal"
                    style={{
                        width: props.size
                    }}
                >
                    <div className="head-modal">
                        <h2>{props.title}</h2>
                        <CloseIcon 
                            style={{cursor: "pointer", marginTop: 2}}
                            onClick={props.hide}
                        />
                    </div>
                    <div className="body-modal">
                        { props.children }
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;

export default Modal;

Modal.propTypes = {
    size: PropTypes.number,
    title: PropTypes.any
}

Modal.defaultProps = {
    size: 900,
    title: "Tiêu đề Modal"
}