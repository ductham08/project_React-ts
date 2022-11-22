import React from 'react'
import logo from "../../../public/image/logo.png"
import bg_forgot from "../../../public/image/background_Repass.png"
import "../../../public/css/re_password.css"

type Props = {}

const Re_password = (props: Props) => {
    return (
        <div className='re_pass_page'>
            <div className="left_content col-5">
                <div className="logo_left col-3">
                    <img src={logo} width="100%" alt="" />
                </div>
                <div className="content_left col-8">
                    <form>
                        <h5>Đặt lại mật khẩu</h5>
                        <p>Vui lòng nhập email để đặt lại mật khẩu của bạn</p>
                        <input type="text" />
                        <div className="item_bottom">
                            <button className='exit'>Hủy</button>
                            <button className='next'>Tiếp tục</button>
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

export default Re_password