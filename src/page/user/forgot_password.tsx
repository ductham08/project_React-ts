import React from 'react'
import logo from "../../public/image/logo.png"
import bg_forgot from "../../public/image/background_Repass.png"
import "../../public/css/user/forgot_pass.css"

type Props = {}

const Forgot_password = (props: Props) => {
    return (
        <div className='forgot_pass_page'>
            <div className="left_content col-5">
                <div className="logo_left col-3">
                    <img src={logo} width="100%" alt="" />
                </div>
                <div className="content_left col-8">
                    <form>
                        <p>Đặt lại mật khẩu mới</p>
                        <label>Mật khẩu</label>
                        <div className="password">
                            <input type="password" />
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                        <label>Nhập lại mật khẩu</label>
                        <div className="password">
                            <input type="password" />
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                        <div className="item_bottom">
                            <button className='next'>Xác nhận</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right_content col-7">
                <div className="bg_right col-9">
                    <img src={bg_forgot} width="100%" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Forgot_password