import { Link } from 'react-router-dom'
import "../../../public/css/admin/statement_page.css"

type Props = {}

const Statement_layout = (props: Props) => {
    return (
        <div className='statement_page'>
            {/* Title */}
            <div className="title_page">
                <div className="nav_number_page">
                    <div className="url_nav">
                        <p className='url_1'><Link to="../device">Báo cáo</Link></p>
                        <p>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35833 4.40874L1.825 0.875405C1.74753 0.797298 1.65536 0.735302 1.55381 0.692995C1.45226 0.650688 1.34334 0.628906 1.23333 0.628906C1.12332 0.628906 1.0144 0.650688 0.912851 0.692995C0.811302 0.735302 0.719134 0.797298 0.641665 0.875405C0.486456 1.03154 0.399338 1.24275 0.399338 1.4629C0.399338 1.68306 0.486456 1.89427 0.641665 2.0504L3.59167 5.0004L0.641665 7.9504C0.486456 8.10654 0.399338 8.31775 0.399338 8.5379C0.399338 8.75806 0.486456 8.96927 0.641665 9.1254C0.719532 9.20264 0.811878 9.26374 0.91341 9.30521C1.01494 9.34668 1.12366 9.3677 1.23333 9.36707C1.343 9.3677 1.45172 9.34668 1.55325 9.30521C1.65478 9.26374 1.74713 9.20264 1.825 9.1254L5.35833 5.59207C5.43644 5.5146 5.49843 5.42243 5.54074 5.32088C5.58305 5.21934 5.60483 5.11041 5.60483 5.0004C5.60483 4.89039 5.58305 4.78147 5.54074 4.67992C5.49843 4.57837 5.43644 4.48621 5.35833 4.40874Z" fill="#7E7D88" />
                            </svg>
                        </p>
                        <p className='url_2'><Link to="../device">Lập báo cáo</Link></p>
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
            </div>
            {/* Main page */}
            <div className="main_page">
                <div className="data_page col-11">
                    <div className="select_table">
                        <div className="item_select">
                            <b>Chọn thời gian</b>
                            <div className="select_option">
                                <select className='select_service'>
                                    <option selected value="" disabled hidden>Tất cả</option>
                                    <option value="">Hoạt động</option>
                                    <option value="">Ngưng hoạt động</option>
                                </select>
                            </div>
                        </div>
                        {/* Data */}
                        <div className="data_table">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <div className="select_option">
                                                <select>
                                                    <option selected hidden>Số thứ tự</option>
                                                    <option >Tất cả</option>
                                                    <option >2040001</option>
                                                    <option >2040002</option>
                                                    <option >2040003</option>
                                                    <option >2040004</option>
                                                    <option >2040005</option>
                                                    <option >2040006</option>
                                                </select>
                                                <p>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z" fill="white" />
                                                        <path d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z" fill="white" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="select_option">
                                                <select>
                                                    <option selected hidden>Tên dịch vụ</option>
                                                    <option >Tất cả</option>
                                                    <option >2040001</option>
                                                    <option >2040002</option>
                                                    <option >2040003</option>
                                                    <option >2040004</option>
                                                    <option >2040005</option>
                                                    <option >2040006</option>
                                                </select>
                                                <p>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z" fill="white" />
                                                        <path d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z" fill="white" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="select_option">
                                                <select>
                                                    <option selected hidden>Thời gian cấp</option>
                                                    <option >Tất cả</option>
                                                    <option >2040001</option>
                                                    <option >2040002</option>
                                                    <option >2040003</option>
                                                    <option >2040004</option>
                                                    <option >2040005</option>
                                                    <option >2040006</option>
                                                </select>
                                                <p>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z" fill="white" />
                                                        <path d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z" fill="white" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="select_option">
                                                <select>
                                                    <option selected hidden>Tình trạng</option>
                                                    <option >Tất cả</option>
                                                    <option >2040001</option>
                                                    <option >2040002</option>
                                                    <option >2040003</option>
                                                    <option >2040004</option>
                                                    <option >2040005</option>
                                                    <option >2040006</option>
                                                </select>
                                                <p>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z" fill="white" />
                                                        <path d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z" fill="white" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="select_option">
                                                <select>
                                                    <option selected hidden>Nguồn cấp</option>
                                                    <option >Tất cả</option>
                                                    <option >2040001</option>
                                                    <option >2040002</option>
                                                    <option >2040003</option>
                                                    <option >2040004</option>
                                                    <option >2040005</option>
                                                    <option >2040006</option>
                                                </select>
                                                <p>
                                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.13807 0.907263L4.01241 2.19611L2.17821 4.29621C1.79537 4.74109 2.06964 5.5 2.61819 5.5L6.17802 5.5L9.38359 5.5C9.93213 5.5 10.2064 4.74109 9.81785 4.29621L6.85799 0.907263C6.38944 0.364247 5.61233 0.364247 5.13807 0.907263Z" fill="white" />
                                                        <path d="M6.86193 12.0927L7.98759 10.8039L9.82179 8.70379C10.2046 8.25891 9.93036 7.5 9.38181 7.5L5.82198 7.5L2.61641 7.5C2.06787 7.5 1.79359 8.25891 2.18215 8.70379L5.14201 12.0927C5.61056 12.6358 6.38767 12.6358 6.86193 12.0927Z" fill="white" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>KI0_01</td>
                                        <td>Kiosk</td>
                                        <td>192.168.1.10</td>
                                        <td>
                                            <div className="status">
                                                <button className='remove_status'></button>
                                                Ngưng hoạt động
                                            </div>
                                        </td>
                                        <td>
                                            <div className="status">
                                                <button className='remove_status'></button>
                                                Mất kết nối
                                            </div>
                                        </td>
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
                </div>
                {/* Button add */}
                <div className="button_add">
                    <button>
                        <Link to="../device/new">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9166 11.888H20.545C17.78 11.888 15.5283 9.63634 15.5283 6.87134V3.49967C15.5283 2.85801 15.0033 2.33301 14.3616 2.33301H9.41496C5.82163 2.33301 2.91663 4.66634 2.91663 8.83134V19.168C2.91663 23.333 5.82163 25.6663 9.41496 25.6663H18.585C22.1783 25.6663 25.0833 23.333 25.0833 19.168V13.0547C25.0833 12.413 24.5583 11.888 23.9166 11.888ZM14.3266 18.4097L11.9933 20.743C11.9116 20.8247 11.8066 20.8947 11.7016 20.9297C11.5966 20.9763 11.4916 20.9997 11.375 20.9997C11.2583 20.9997 11.1533 20.9763 11.0483 20.9297C10.955 20.8947 10.8616 20.8247 10.7916 20.7547C10.78 20.743 10.7683 20.743 10.7683 20.7313L8.43496 18.398C8.09663 18.0597 8.09663 17.4997 8.43496 17.1613C8.77329 16.823 9.33329 16.823 9.67163 17.1613L10.5 18.013V13.1247C10.5 12.6463 10.8966 12.2497 11.375 12.2497C11.8533 12.2497 12.25 12.6463 12.25 13.1247V18.013L13.09 17.173C13.4283 16.8347 13.9883 16.8347 14.3266 17.173C14.665 17.5113 14.665 18.0713 14.3266 18.4097Z" fill="#FF7506" />
                                <path d="M20.335 10.2779C21.4434 10.2896 22.9834 10.2896 24.3017 10.2896C24.9667 10.2896 25.3167 9.50792 24.85 9.04125C23.17 7.34958 20.16 4.30458 18.4334 2.57792C17.955 2.09958 17.1267 2.42625 17.1267 3.09125V7.16292C17.1267 8.86625 18.5734 10.2779 20.335 10.2779Z" fill="#FF7506" />
                            </svg>
                            <p>Tải về</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Statement_layout