import React from 'react'
import { Link } from 'react-router-dom'
import "../../../public/css/admin/manage_role.css"

type Props = {}

const Manage_role = (props: Props) => {
    return (
        <div className='manage_role'>
            {/* Title */}
            <div className="title_page">
                <div className="nav_number_page">
                    <div className="url_nav">
                        <p className='url_1'><Link to="">Cài đặt hệ thống</Link></p>
                        <p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88" />
                            </svg>
                        </p>
                        <p className='url_2'><Link to="">Quản lý vai trò</Link></p>
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
                <h4>Danh sách vai trò</h4>
            </div>
            {/* Main data */}
            <div className="main_page">
                <div className="table_main col-11">
                    <div className="select_table">
                        <div className="item_select">
                            <b>Từ khóa</b>
                            <div className="select_option input_text">
                                <form>
                                    <input type="text" placeholder="Nhập từ khóa" />
                                    <button>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Data */}
                    <div className="data_table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Tên vai trò</td>
                                    <td>Số người dùng</td>
                                    <td>Mô tả</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kế toán</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                                <tr>
                                    <td>Bác sĩ</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                                <tr>
                                    <td>Lễ tân</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                                <tr>
                                    <td>Quản lý</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                                <tr>
                                    <td>Admin</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                                <tr>
                                    <td>Superadmin</td>
                                    <td>6</td>
                                    <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>
                                    <td><Link to="./001">Cập nhật</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Nav page */}
                    <div className="nav_number_data">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 7L9 12L15 17" fill="#A9A9B0" />
                                <path d="M15 7L9 12L15 17L15 7Z" stroke="#A9A9B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className='page_active'>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>...</button>
                        <button>10</button>
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17L15 12L9 7" fill="#7E7D88" />
                                <path d="M9 17L15 12L9 7L9 17Z" stroke="#7E7D88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Button add */}
                <div className="button_add">
                    <button>
                        <Link to="./new">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z" fill="#FF9138" />
                            </svg>
                            <p>Thêm vai trò</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manage_role