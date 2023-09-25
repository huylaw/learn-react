import React from "react";
import PropTypes from "prop-types";

export default function HInput(props){
    return(
        <React.Fragment>
            <div 
                className="container-input"
                style={{
                    width: props.size
                }}
            >
                <label>
                    <span>{props.label}</span>
                    <span style={{
                        color: "red"
                    }}>{props.required === true ? "*" : ''}</span>
                </label>
                <input 
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    type={props.type} 
                    placeholder={props.placeholder}
                />
            </div>
        </React.Fragment>
    );
}

HInput.propTypes = {
    type: PropTypes.string, // type của input
    required: PropTypes.bool, // input có required hay không
    label: PropTypes.any, // label của input
    placeholder: PropTypes.string, // placeholder input
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // width của input
}

HInput.defaultProps = {
    type: "text",
    required: false,
    label: "Label",
    placeholder: "Nhập dữ liệu",
    size: 200,
}