import React from 'react'
import { Link } from 'react-router-dom'
import "../../../public/css/login.css"
import logo from "../../../public/image/logo.png"
import imglogin from "../../../public/image/img_login.png"

type Props = {}

const Login = (props: Props) => {
    return (
        <div className='login_page'>
            <div className="left_content col-5">
                <div className="logo_left col-3">
                    <img src={logo} width="100%" alt="" />
                </div>
                <div className="content_left col-8">
                    <form>
                        <label>Tên đăng nhập *</label>
                        <input type="text" />
                        <label>Mật khẩu *</label>
                        <div className="password">
                            <input type="password" />
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                        <p><a href="./repass">Quên mật khẩu?</a></p>
                        <button className='submit'>Đăng nhập</button>
                    </form>
                </div>
            </div>
            <div className="right_content col-7">
                <div className="bg_right col-8">
                    <img src={imglogin} width="100%" alt="" />
                </div>
                <div className="content_right">
                    <h4>Hệ thống</h4>
                    <br />
                    <h2>QUẢN LÝ XẾP HÀNG</h2>
                </div>
            </div>
        </div >
    )
}

export default Login