import "./Login.scss";
import logo from "../../assets/image/logo.png"
import { useForm } from "react-hook-form";
import { useState } from "react";
import Icon from "@mui/material/Icon";

export default function Login(){
    const [currentItem, setCurrentItem] = useState({ username: "", password: "" });
    const [typepass, setTypepass] = useState("password");
    const [showPass, setShowPass] = useState(false);
    const [iconEye, setIconEye] = useState("visibility_off")

    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: "onSubmit",
        criteriaMode: "firstError",
        defaultValues: {},
        reValidateMode: "onBlur"
    })

    const handleChange = (e) => {
        setCurrentItem((i) => ({
            ...i,
            [e.target.name] : e.target.value,
        }))
    }

    const onSubmit = data => {
        console.log(data);
    }

    return(
        <div className="container-login">
            <div className="logo-img">
                <img alt="img-logo" src={logo}/>
            </div>
            <div className="form-login">
                <h2>Đăng nhập</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Tên đăng nhập <span>(*)</span></label>
                            <div className="combo-input">
                                <input 
                                    className="input-primary"
                                    type="text"
                                    placeholder="Tên đăng nhập"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Vui lòng nhập tên đăng nhập."
                                        }
                                    })}
                                    onChange={handleChange}
                                />
                                <Icon className="icon">person</Icon>
                            </div>
                            <p className="error-msg">{errors['username']?.message}</p>
                        </div>
                        <div>
                            <label>Mật khẩu<span>(*)</span></label>
                            <div className="combo-input">
                                <input 
                                    className="input-primary"
                                    type={typepass}
                                    placeholder="Mật khẩu đăng nhập"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Vui lòng nhập mật khẩu."
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Mật khẩu chứa ít nhất 6 ký tự."
                                        }
                                    })}
                                    onChange={handleChange}
                                />
                                <Icon className="icon">{ iconEye }</Icon>
                            </div>
                            <p className="error-msg">{errors['password']?.message}</p>
                        </div>

                        <div>
                            <button type="submit">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}