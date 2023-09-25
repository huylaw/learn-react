import Modal from "../../components/bases/modal/Modal";
import useModal from "../../components/bases/modal/useModal";
import BreadCrum from "../../components/items/breadcrum/BreadCrum";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, useRef, useState } from "react";
import ValidateForm from "../../utils/ValidateForm";

import "./Home.scss";
import HInput from "../../components/bases/input/HInput";

export default function Home(){
    const {isVisible, toggle} = useModal(); // modal
    const [currentItem, setCurrentItem] = useState({
        id: "",
        name: "Lee Gia Huy",
        gender: "",
        birthday: "",
        cmnd: "",
        dateCMND: "",
        prefix: "",
        unitName: "",
        issuedBy: "",
        address: "",
        phone: "",
        localPhone: "",
        email: "",
        stk: "",
        bankName: "",
        branch: ""
    });

    const handleChange = (e) => {
        setCurrentItem((i) => ({
            ...i,
            [e.target.name]: e.target.value
        }));
    };

    // field table
    const columns = [
        {   // 0
            field: 'id', 
            label: 'Mã nhân viên', 
            size: 150,
            required: true
        },
        {   // 1
            field: 'name', 
            label: 'Tên nhân viên',
            size: 242,
            required: true,

        },
        {   // 2
            field: 'gender', 
            label: 'Giới tính',
            size: 267
        },
        {   // 3
            field: 'birthday', 
            label: 'Ngày sinh', 
            type: 'date',
            size: 175
        },
        {   // 4
            field: 'cmnd', 
            label: 'Số CMND',
            size: 267
        },
        {   // 5
            field: 'dateCMND',
            label: 'Ngày cấp',
            type: 'date',
            size: 175
        },
        {   // 6
            field: 'prefix', 
            label: 'Chức danh',
            size: 400,
        },
        {   // 7
            field: 'unitName', 
            label: 'Tên đơn vị',
            size: 400,
            required: true
        },
        {   // 8
            field: 'issuedBy',
            label: 'Nơi cấp',
            size: 450,
        },
        {   // 9
            field: 'address',
            label: 'Địa chỉ',
            size: "100%"
        },
        {   // 10
            field: 'phone',
            label: 'Đt di động',
        },
        {   // 11
            field: 'localPhone',
            label: 'Đt cố định',
        },
        {   // 12
            field: 'email',
            label: 'Email',
        },
        {   // 13
            field: 'stk', 
            label: 'Số tài khoản',
        },
        {   // 14
            field: 'bankName', 
            label: 'Tên ngân hàng',
        },
        {   // 15
            field: 'branch', 
            label: 'Chi nhánh tk ngân hàng',
        },
        {   // 16
            field: 'action', 
            label: 'Chức năng',
        }
    ];
    
    // lấy list danh sách để tạo form 
    const info = columns.filter((i) => i.field !== 'action');
    
    // map input
    const listInput = info.map((i) => 
        <HInput
            key={i.field}
            name={i.field}
            label={i.label}
            value={currentItem[i.field]}
            type={i.type}
            required={i.required}
            placeholder={i.label}
            onChange={handleChange}
            size={i.size}
        />
    );

    // validate form
    const validateForm = () => {
        let errData = {
            field: '',
            error: false,
            message: ''
        };

        const {id, name, } = currentItem;
    };
    
    // submit form 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentItem);
        // ValidateForm(currentItem);
        // toggle();
    };
    
    return(
        <div className="container-home">
            <BreadCrum title="Trang chủ"/>
            <div className="view-home">
                <div className="head">
                    <button className="btn-extra">
                        <RestartAltIcon/>
                    </button>
                    <button className="btn-primary" onClick={toggle}>Thêm mới</button>
                </div>
                <Modal isVisible={isVisible} hide={toggle} title="Thông tin cá nhân">
                    <form onSubmit={handleSubmit}>
                        <div style={{
                            display: "flex", alignItems: "center", boxSizing: "border-box"
                        }}>
                            <div style={{ paddingRight: "26px", boxSizing: "border-box" }}>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "8px"
                                }}>
                                    {listInput[0]}
                                    {listInput[1]}
                                </div>
                                <div>{listInput[7]}</div>
                                <div>{listInput[6]}</div>
                            </div>
                            <div style={{ width: "100%", boxSizing: "border-box" }}>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "8px"
                                }}>
                                    {listInput[3]}
                                    {listInput[2]}
                                </div>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "8px"
                                }}>
                                    {listInput[4]}
                                    {listInput[5]}
                                </div>
                                <div>{listInput[8]}</div>
                            </div>
                        </div>
                        <div>{listInput[9]}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {listInput[10]}
                            {listInput[11]}
                            {listInput[12]}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {listInput[13]}
                            {listInput[14]}
                            {listInput[15]}
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                            <button type="submit" className="btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
}