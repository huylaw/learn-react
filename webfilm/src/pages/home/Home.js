import Modal from "../../components/bases/modal/Modal";
import useModal from "../../components/bases/modal/useModal";
import BreadCrum from "../../components/items/breadcrum/BreadCrum";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, useRef, useState } from "react";
import { Required, Pattern, MinLength, MaxLength } from "../../utils/ValidateForm";
import "./Home.scss";
import HInput from "../../components/bases/input/HInput";
import { useForm } from "react-hook-form";

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
    
    const { register, watch, handleSubmit, formState: {errors} } = useForm({
        mode: "onSubmit", // báo lỗi validate form khi submit
        defaultValues: {}, // giá trị mặc định ban đầu của form
        criteriaMode: "firstError", // validate tất cả các lỗi
        reValidateMode: "onBlur", // validate lại khi thay đổi dữ liệu trong 1 ô input 
    });

    const watchName = watch("name");



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
            type: 'text',
            required: true,
            regex: /\d+/,
            minLength: 6,
            maxLength: 20
        },
        {   // 1
            field: 'name', 
            label: 'Tên nhân viên',
            size: 242,
            required: true,
            type: 'text',
        },
        {   // 2
            field: 'gender', 
            label: 'Giới tính',
            size: 267,
            type: 'radio'
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
            size: 267,
            type: 'text',
        },
        {   // 5
            field: 'dateCMND',
            label: 'Ngày cấp',
            type: 'date',
            size: 175,
        },
        {   // 6
            field: 'prefix', 
            label: 'Chức danh',
            size: 400,
            type: 'text',
        },
        {   // 7
            field: 'unitName', 
            label: 'Tên đơn vị',
            size: 400,
            required: true,
            type: 'select'
        },
        {   // 8
            field: 'issuedBy',
            label: 'Nơi cấp',
            size: 450,
            type: 'text',
        },
        {   // 9
            field: 'address',
            label: 'Địa chỉ',
            size: "100%",
            type: 'text',
        },
        {   // 10
            field: 'phone',
            label: 'Đt di động',
            type: 'text',
        },
        {   // 11
            field: 'localPhone',
            label: 'Đt cố định',
            type: 'text',
        },
        {   // 12
            field: 'email',
            label: 'Email',
            type: 'text',
        },
        {   // 13
            field: 'stk', 
            label: 'Số tài khoản',
            type: 'text',
        },
        {   // 14
            field: 'bankName', 
            label: 'Tên ngân hàng',
            type: 'text',
        },
        {   // 15
            field: 'branch', 
            label: 'Chi nhánh tk ngân hàng',
            type: 'text',
        },
        {   // 16
            field: 'action', 
            label: 'Chức năng',
        }
    ];
    
    // lấy list danh sách để tạo form 
    const info = columns.filter((i) => i.field !== 'action' && i.type !== 'radio' && i.type !== 'select');
    const radioGender = columns.filter((i) => i.field !== 'action' && i.type === 'radio');
    
    // map input
    const listInput = info.map((i) => 
        <div 
            className="container-input"
            style={{ width: i.size }}
        >
            <label>
                {i.label}
                <span style={{ color: "red" }}>
                    {i.required === true ? "*" : ''}
                </span>
            </label>
            <input 
                type={i.type}
                placeholder={i.label}
                {...register(i.field, {
                    required: Required(i.required, i.label, i.msg),
                    pattern: Pattern(i.regex, i.label),
                    minLength: MinLength(i.minLength, i.label),
                    maxLength: MaxLength(i.maxLength, i.label),
                    onChange: handleChange,
                })}
                value={currentItem[i.field]}
            />
            <p className="error-msg">{errors[i.field]?.message}</p>
        </div>
    );

    const inputGender = radioGender.map((i) => 
        <div>

        </div>
    );

    const onSubmit = data => {
        console.log(data);
    }
    
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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {/* <div>{listInput[7]}</div> */}
                                <div>{listInput[6]}</div>
                            </div>
                            <div style={{ width: "100%", boxSizing: "border-box" }}>
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "8px"
                                }}>
                                    {listInput[3]}
                                    {/* {listInput[2]} */}
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