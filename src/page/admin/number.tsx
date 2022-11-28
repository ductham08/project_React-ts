import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../../public/css/admin/number_page.css"

type Props = {}

const Number_layout = (props: Props) => {
    return (
        <div className="number_page">
            <div className="title_page">
                <div className="nav_number_page">
                    <div className="url_nav">
                        <p className='url_1'><Link to="">Cấp số</Link></p>
                        <p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88" />
                            </svg>
                        </p>
                        <p className='url_2'><Link to="">Danh sách cấp số</Link></p>
                    </div>
                    <div className="user_nav">
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1167 12.0753L15.2833 10.692C15.1083 10.3837 14.95 9.80033 14.95 9.45866V7.35033C14.95 5.39199 13.8 3.70033 12.1417 2.90866C11.7083 2.14199 10.9083 1.66699 9.99166 1.66699C9.08333 1.66699 8.26666 2.15866 7.83333 2.93366C6.20833 3.74199 5.08333 5.41699 5.08333 7.35033V9.45866C5.08333 9.80033 4.92499 10.3837 4.74999 10.6837L3.90833 12.0753C3.57499 12.6337 3.49999 13.2503 3.70833 13.817C3.90833 14.3753 4.38333 14.8087 4.99999 15.017C6.61666 15.567 8.31666 15.8337 10.0167 15.8337C11.7167 15.8337 13.4167 15.567 15.0333 15.0253C15.6167 14.8337 16.0667 14.392 16.2833 13.817C16.5 13.242 16.4417 12.6087 16.1167 12.0753Z" fill="#FFAC6A" />
                                <path d="M12.3584 16.6753C12.0084 17.642 11.0834 18.3337 10 18.3337C9.34169 18.3337 8.69169 18.067 8.23336 17.592C7.96669 17.342 7.76669 17.0087 7.65002 16.667C7.75836 16.6837 7.86669 16.692 7.98336 16.7087C8.17502 16.7337 8.37502 16.7587 8.57502 16.7753C9.05002 16.817 9.53336 16.842 10.0167 16.842C10.4917 16.842 10.9667 16.817 11.4334 16.7753C11.6084 16.7587 11.7834 16.7503 11.95 16.7253C12.0834 16.7087 12.2167 16.692 12.3584 16.6753Z" fill="#FFAC6A" />
                            </svg>
                        </button>
                        <div className="user">
                            <div className="avatar">
                                <img src="https://image-us.24h.com.vn/upload/4-2020/images/2020-11-11/Nu-sinh-Nhan-van-la-nguoi-mau-anh-tuoi-20-mon-mon-dep-xinh-khong-kem-dich-Le-Nhiet-Ba-107368862_2653859988196507_3262836775669550024_n-1605081022-435-width960height960.jpg" width="100%" alt="" />
                            </div>
                            <div className="info_user">
                                <p>Xin chào</p>
                                <p className="name_user">
                                    <Link to="../user">Lê Quỳnh Ái Vân</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>Quản lý cấp số</h4>
            </div>
            <div className="main_page">
                <div className="table_main col-11">
                    <div className="select_table">
                        <div className="item_select">
                            <b>Tên dịch vụ</b>
                            <div className="select_option col-1">
                                <select className='select_service'>
                                    <option selected>Tất cả</option>
                                    <option value="">Đang chờ</option>
                                    <option value="">Đã sử dụng</option>
                                    <option value="">Bỏ qua</option>
                                </select>
                                <p>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L7 0.999999L1 7" fill="#FF7506" />
                                        <path d="M13 7L7 0.999999L1 7L13 7Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="item_select">
                            <b>Tình trạng</b>
                            <div className="select_option col-1">
                                <select className='select_service'>
                                    <option selected>Tất cả</option>
                                    <option value="">Kiossh</option>
                                    <option value="">Hệ thống</option>
                                </select>
                                <p>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L7 0.999999L1 7" fill="#FF7506" />
                                        <path d="M13 7L7 0.999999L1 7L13 7Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="item_select">
                            <b>Dịch vụ</b>
                            <div className="select_option col-1">
                                <select className='select_service'>
                                    <option selected>Tất cả</option>
                                    <option value="">Khám sản - Phụ khoa</option>
                                    <option value="">Khám răng hàm mặt</option>
                                    <option value="">Khám tai mũi họng</option>
                                </select>
                                <p>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7L7 0.999999L1 7" fill="#FF7506" />
                                        <path d="M13 7L7 0.999999L1 7L13 7Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button_add col-1"></div>
            </div>
        </div>
    )
}

export default Number_layout