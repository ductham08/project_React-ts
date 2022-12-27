import { Link } from 'react-router-dom'
import "../../../public/css/admin/detail_service.css"

type Props = {}

const Detail_service = (props: Props) => {
    return (
        <div className='detail_service_page'>
            {/* Title */}
            <div className="title_page">
                <div className="nav_number_page">
                    <div className="url_nav">
                        <p className='url_1'><Link to="../service">Dịch vụ</Link></p>
                        <p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88" />
                            </svg>
                        </p>
                        <p className='url_1'><Link to="../service">Danh sách dịch vụ</Link></p>
                        <p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88" />
                            </svg>
                        </p>
                        <p className='url_2'><Link to="">Chi tiết</Link></p>
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
                <h4>Quản lý dịch vụ</h4>
            </div>
            {/* Main */}
            <div className="main_page">
                <div className="content_page  col-11">
                    <div className="detail_service">
                        <div className="item_detail">
                            <h4>Thông tin dịch vụ</h4>
                            <table>
                                <tr>
                                    <td className='name_service'>
                                        <b>Mã dịch vụ: </b>
                                    </td>
                                    <td>
                                        <p>KIO_01</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='name_service'>
                                        <b>Tên dịch vụ: </b>
                                    </td>
                                    <td>
                                        <p>Khám tim mạch</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='name_service'>
                                        <b>Mô tả: </b>
                                    </td>
                                    <td>
                                        <p>Chuyên các bệnh lý về tim</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="item_detail">
                            <h4>Quy tắc cấp số</h4>
                            <table>
                                <tr>
                                    <td className='name_service'>
                                        <b>Tăng tự động: </b>
                                    </td>
                                    <td>
                                        <input type="text" value="0001" disabled />
                                    </td>
                                    <td>
                                        <b>đến</b>
                                    </td>
                                    <td>
                                        <input type="text" value="9999" disabled />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='name_service'>
                                        <b>Prefix: </b>
                                    </td>
                                    <td>
                                        <input type="text" value="0001" disabled />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='name_service'>
                                        <b>Reset mỗi ngày</b>
                                    </td>
                                </tr>
                            </table>
                            <p>Ví dụ: 201-2001</p>
                        </div>
                    </div>
                    <div className="data_service">
                        <div className="select_table">
                            <div className="item_select">
                                <b>Tên dịch vụ</b>
                                <div className="select_option">
                                    <select className='select_service'>
                                        <option selected value="">Tất cả</option>
                                        <option value="">Hoạt động</option>
                                        <option value="">Ngưng hoạt động</option>
                                    </select>
                                    <p>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7L7 0.999999L1 7" fill="#FF7506" />
                                            <path d="M13 7L7 0.999999L1 7L13 7Z" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                            <div className="item_select">
                                <b>Chọn thời gian</b>
                                <div className="select_option">
                                    <select className='select_service'>
                                        <option selected value="" disabled hidden>Tất cả</option>
                                        <option value="">Khám sản - Phụ khoa</option>
                                        <option value="">Khám răng hàm mặt</option>
                                        <option value="">Khám tai mũi họng</option>
                                    </select>
                                    <p>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 7L7 0.999999L1 7" fill="#FF7506" />
                                            <path d="M13 7L7 0.999999L1 7L13 7Z" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </p>
                                </div>
                            </div>
                            <div className="item_select">
                                <b>Từ khóa</b>
                                <div className="select_option input_text">
                                    <form>
                                        <input type="text" placeholder="Nhập từ khóa" />
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5 17.5L13.875 13.875" stroke="#FF7506" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                        <td>Số thứ tự</td>
                                        <td>Trạng thái</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2010001</td>
                                        <td>
                                            <button className='pending_status'></button>
                                            Hoạt động
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Page */}
                        <div className="nav_number_data">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 7L9 12L15 17" fill="#A9A9B0" />
                                    <path d="M15 7L9 12L15 17L15 7Z" stroke="#A9A9B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                    <path d="M9 17L15 12L9 7L9 17Z" stroke="#7E7D88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="button_service button_add col-1">
                    <button>
                        <Link to="#">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.443 2.5521C21.1213 2.44721 22.7762 3.02994 24.0233 4.17209C25.1655 5.41913 25.7482 7.07409 25.655 8.764V19.6494C25.7599 21.3393 25.1655 22.9943 24.035 24.2413C22.7879 25.3835 21.1213 25.9662 19.443 25.8613H8.55751C6.86758 25.9662 5.21261 25.3835 3.96556 24.2413C2.8234 22.9943 2.24066 21.3393 2.34555 19.6494V8.764C2.24066 7.07409 2.8234 5.41913 3.96556 4.17209C5.21261 3.02994 6.86758 2.44721 8.55751 2.5521H19.443ZM12.8115 19.8592L20.6551 11.9923C21.366 11.2697 21.366 10.1043 20.6551 9.39335L19.14 7.87825C18.4174 7.15567 17.2519 7.15567 16.5293 7.87825L15.7485 8.67077C15.6319 8.78731 15.6319 8.98544 15.7485 9.10199C15.7485 9.10199 17.6016 10.9434 17.6365 10.99C17.7647 11.1299 17.8463 11.3164 17.8463 11.5261C17.8463 11.9457 17.5083 12.2953 17.0771 12.2953C16.879 12.2953 16.6925 12.2138 16.5643 12.0856L14.618 10.1509C14.5247 10.0577 14.3616 10.0577 14.2683 10.1509L8.70902 15.7101C8.32442 16.0948 8.10298 16.6076 8.09132 17.1553L8.02139 19.9175C8.02139 20.069 8.06801 20.2088 8.17291 20.3137C8.2778 20.4186 8.41765 20.4769 8.56917 20.4769H11.308C11.8674 20.4769 12.4036 20.2554 12.8115 19.8592Z" fill="#FF7506" />
                            </svg>
                            <p>
                                Cập nhật danh sách
                            </p>
                        </Link>
                    </button>
                    <button>
                        <Link to="../service">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8885 2.54004H9.1235C4.86516 2.54004 2.3335 5.07171 2.3335 9.31837V19.0834C2.3335 23.33 4.86516 25.8617 9.11183 25.8617H18.8768C23.1235 25.8617 25.6552 23.33 25.6552 19.0834V9.31837C25.6668 5.07171 23.1352 2.54004 18.8885 2.54004Z" fill="#FF7506" />
                                <path d="M16.2398 10.1H10.2315L10.6165 9.71503C10.9548 9.37669 10.9548 8.81669 10.6165 8.47836C10.2782 8.14003 9.71818 8.14003 9.37985 8.47836L7.54818 10.31C7.20985 10.6484 7.20985 11.2084 7.54818 11.5467L9.37985 13.3784C9.55485 13.5534 9.77652 13.635 9.99818 13.635C10.2198 13.635 10.4415 13.5534 10.6165 13.3784C10.9548 13.04 10.9548 12.48 10.6165 12.1417L10.3132 11.8384H16.2398C17.7332 11.8384 18.9582 13.0517 18.9582 14.5567C18.9582 16.0617 17.7448 17.275 16.2398 17.275H10.4998C10.0215 17.275 9.62485 17.6717 9.62485 18.15C9.62485 18.6284 10.0215 19.025 10.4998 19.025H16.2398C18.7015 19.025 20.7082 17.0184 20.7082 14.5567C20.7082 12.095 18.7015 10.1 16.2398 10.1Z" fill="#FFF2E7" />
                            </svg>
                            <p>
                                Quay lại
                            </p>
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Detail_service