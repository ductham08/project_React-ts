import React, { useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import logo from "../../public/image/logo.png";
import "./nav_bar.css";

type Props = {};

const Nav_bar = (props: Props) => {
  const navLinkClass = ({ isActive }: any) => {
    return isActive ? "active_navlink" : "";
  };

  const active_submenu = () => {
    const submenu = document.querySelector(".sub_menu");
    submenu?.classList.toggle("sub_menu_active");
  };
  return (
    <div className="navbar">
      <div className="logo-navbar col-6">
        <img src={logo} width="100%" alt="" />
      </div>
      <div className="menu-navbar">
        <ul>
          <li>
            <NavLink to="dashboard" className={navLinkClass}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 9.08268V3.41602C18.3333 2.16602 17.8 1.66602 16.475 1.66602H13.1083C11.7833 1.66602 11.25 2.16602 11.25 3.41602V9.08268C11.25 10.3327 11.7833 10.8327 13.1083 10.8327H16.475C17.8 10.8327 18.3333 10.3327 18.3333 9.08268Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 16.584V15.084C18.3333 13.834 17.8 13.334 16.475 13.334H13.1083C11.7833 13.334 11.25 13.834 11.25 15.084V16.584C11.25 17.834 11.7833 18.334 13.1083 18.334H16.475C17.8 18.334 18.3333 17.834 18.3333 16.584Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.74984 10.916V16.5827C8.74984 17.8327 8.2165 18.3327 6.8915 18.3327H3.52484C2.19984 18.3327 1.6665 17.8327 1.6665 16.5827V10.916C1.6665 9.66602 2.19984 9.16602 3.52484 9.16602H6.8915C8.2165 9.16602 8.74984 9.66602 8.74984 10.916Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.74984 3.41602V4.91602C8.74984 6.16602 8.2165 6.66602 6.8915 6.66602H3.52484C2.19984 6.66602 1.6665 6.16602 1.6665 4.91602V3.41602C1.6665 2.16602 2.19984 1.66602 3.52484 1.66602H6.8915C8.2165 1.66602 8.74984 2.16602 8.74984 3.41602Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="device" className={navLinkClass}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3665 1.66602H14.6248C17.5915 1.66602 18.3332 2.40768 18.3332 5.36602V10.641C18.3332 13.6077 17.5915 14.341 14.6332 14.341H5.3665C2.40817 14.3493 1.6665 13.6077 1.6665 10.6493V5.36602C1.6665 2.40768 2.40817 1.66602 5.3665 1.66602Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14.3496V18.3329"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.6665 10.834H18.3332"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25 18.334H13.75"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Thiết bị
            </NavLink>
          </li>
          <li>
            <NavLink to="service" className={navLinkClass}>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.57986" cy="14.4016" r="0.708276" fill="#A9A9B0" />
                <circle cx="6.9407" cy="14.4016" r="0.708276" fill="#A9A9B0" />
                <circle cx="9.30154" cy="14.4016" r="0.708276" fill="#A9A9B0" />
                <g clip-path="url(#clip0_60833_3744)">
                  <path
                    d="M13.0697 5.18945C13.5212 5.18945 13.9317 5.31748 14.2862 5.59915C14.9579 6.14053 15.0549 7.05868 14.4915 7.7098C14.3161 7.91465 14.1071 8.09755 13.9093 8.28044C13.663 8.50724 13.4839 8.75232 13.4988 9.1108C13.51 9.37052 13.2899 9.54245 13.0324 9.53513C12.7898 9.52416 12.6219 9.3376 12.6107 9.07788C12.5883 8.60235 12.7562 8.19997 13.0846 7.85978C13.3085 7.62567 13.5548 7.41716 13.775 7.17939C14.0772 6.85749 14.0101 6.43682 13.622 6.21369C13.5026 6.14419 13.357 6.09663 13.2152 6.07834C12.7674 6.02347 12.3644 6.15882 12.1927 6.7258C12.1218 6.96723 11.8718 7.0916 11.6404 7.0221C11.3979 6.9526 11.271 6.72215 11.3382 6.46975C11.5397 5.68694 12.2077 5.19311 13.0697 5.18945Z"
                    fill="#A9A9B0"
                  />
                  <path
                    d="M13.0732 9.9885C13.327 9.99581 13.5136 10.1897 13.5061 10.4311C13.4987 10.6799 13.2934 10.8628 13.0359 10.8518C12.7896 10.8408 12.6031 10.6433 12.6142 10.4018C12.6217 10.1604 12.8195 9.98118 13.0732 9.9885Z"
                    fill="#A9A9B0"
                  />
                </g>
                <path
                  d="M20.9999 8.18601C20.9999 10.0609 19.9886 11.7464 18.3784 12.9193C18.3226 12.9583 18.292 13.0251 18.2892 13.092L18.2196 14.9168C18.2112 15.1619 17.941 15.304 17.7348 15.1731L16.1886 14.2008C16.1886 14.2008 16.1886 14.2008 16.1858 14.2008C16.0967 14.1423 15.9881 14.1256 15.8878 14.1562C14.9684 14.4431 13.9683 14.6019 12.9208 14.6019C12.9068 14.6019 12.8929 14.6019 12.879 14.6019C12.9068 14.4181 12.9208 14.2314 12.9208 14.042C12.9208 11.426 10.2519 9.30594 6.95894 9.30594C6.28196 9.30594 5.63285 9.39509 5.02552 9.55946C4.90294 9.1165 4.83887 8.65404 4.83887 8.18044C4.83887 4.63398 8.45497 1.76172 12.918 1.76172C17.3838 1.76729 20.9999 4.64234 20.9999 8.18601Z"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.02842 9.56445C2.68547 10.2024 1 11.9687 1 14.047C1 15.4288 1.74662 16.6741 2.93342 17.5405C2.97521 17.5711 2.99749 17.6185 3.00028 17.6686L3.05042 19.0142C3.056 19.1953 3.25658 19.2984 3.40981 19.2037L4.55203 18.4849C4.56038 18.4793 4.57153 18.471 4.57989 18.4654C4.62167 18.432 4.67739 18.4208 4.72754 18.4376C5.41844 18.6604 6.17064 18.783 6.96183 18.783C10.0152 18.783 12.5336 16.9582 12.8819 14.6069"
                  stroke="#A9A9B0"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <defs>
                  <clipPath id="clip0_60833_3744">
                    <rect
                      width="3.54138"
                      height="5.66621"
                      fill="white"
                      transform="translate(11.3193 5.18945)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Dịch vụ
            </NavLink>
          </li>
          <li>
            <NavLink to="number" className={navLinkClass}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_60833_3758)">
                  <g clip-path="url(#clip1_60833_3758)">
                    <path
                      d="M1.6665 14.166L9.99984 18.3327L18.3332 14.166"
                      stroke="#A9A9B0"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.6665 10L9.99984 14.1667L18.3332 10"
                      stroke="#A9A9B0"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.99984 1.66602L1.6665 5.83268L9.99984 9.99935L18.3332 5.83268L9.99984 1.66602Z"
                      stroke="#A9A9B0"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_60833_3758">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_60833_3758">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Cấp số
            </NavLink>
          </li>
          <li>
            <NavLink to="statement" className={navLinkClass}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.68581 18.0427L8.68305 18.0412L4.11496 15.4083C3.16178 14.7653 2.78261 14.4683 2.59076 14.1379C2.40775 13.8227 2.3667 13.4248 2.3667 12.4077V7.59101C2.3667 6.57241 2.40562 6.17344 2.58452 5.85927C2.77035 5.53294 3.13837 5.24078 4.07398 4.60668L8.67512 1.94898L8.6762 1.94835C9.02138 1.74782 9.49266 1.63477 9.98753 1.63477C10.4824 1.63477 10.9537 1.74782 11.2989 1.94836L11.3004 1.94927L15.8851 4.59045C16.8383 5.23339 17.2175 5.53042 17.4093 5.86083C17.5923 6.17602 17.6334 6.57386 17.6334 7.59101V12.3993C17.6334 13.418 17.5944 13.8169 17.4155 14.1311C17.2297 14.4574 16.8617 14.7496 15.9261 15.3837L11.3261 18.0407C11.3259 18.0408 11.3257 18.0409 11.3255 18.0411C10.967 18.2467 10.4907 18.3577 10 18.3577C9.50802 18.3577 9.03362 18.2462 8.68581 18.0427ZM4.2331 4.81649L4.21807 4.82518L4.20367 4.83489L4.18755 4.84578C3.86167 5.06569 3.59379 5.24646 3.38779 5.40949C3.17519 5.57775 2.99258 5.75412 2.86232 5.97867C2.72905 6.20842 2.67398 6.44778 2.64868 6.70368C2.62501 6.94316 2.62502 7.23136 2.62503 7.56793L2.62503 7.59101V12.3993L2.62503 12.4228C2.62502 12.759 2.62501 13.0478 2.64931 13.2882C2.67536 13.5458 2.73206 13.7862 2.86798 14.0174C3.00034 14.2425 3.18564 14.4205 3.40209 14.5916C3.6124 14.7578 3.88617 14.9431 4.22058 15.1694L4.23649 15.1801L4.25133 15.1902L4.26684 15.1991L8.81684 17.8241L8.81705 17.8242C9.163 18.0236 9.60367 18.1035 10.0042 18.1035C10.4047 18.1035 10.8454 18.0236 11.1913 17.8242L11.192 17.8239L15.7753 15.1739L15.791 15.1648L15.8059 15.1547L15.822 15.1437C16.1458 14.9239 16.4122 14.743 16.617 14.5799C16.8285 14.4115 17.01 14.235 17.1395 14.0105C17.2718 13.781 17.3264 13.542 17.3515 13.2864C17.3751 13.0471 17.375 12.759 17.375 12.4223V12.3993V7.59101V7.56758C17.375 7.23131 17.3751 6.94261 17.3508 6.70218C17.3247 6.44454 17.268 6.20414 17.1321 5.97299C16.9997 5.7479 16.8144 5.56984 16.598 5.39875C16.3877 5.23251 16.1139 5.04727 15.7794 4.82097L15.7636 4.81024L15.7487 4.8002L15.7332 4.79126L11.1862 2.168C11.1857 2.16769 11.1852 2.16738 11.1846 2.16707C10.8382 1.96455 10.3984 1.89102 10 1.89102C9.60159 1.89102 9.16173 1.96457 8.81527 2.16717L4.2331 4.81649Z"
                  stroke="#A9A9B0"
                />
                <path
                  d="M10 12.625C8.55114 12.625 7.375 11.4489 7.375 10C7.375 8.55114 8.55114 7.375 10 7.375C11.4489 7.375 12.625 8.55114 12.625 10C12.625 11.4489 11.4489 12.625 10 12.625ZM10 7.625C8.69052 7.625 7.625 8.69052 7.625 10C7.625 11.3095 8.69052 12.375 10 12.375C11.3095 12.375 12.375 11.3095 12.375 10C12.375 8.69052 11.3095 7.625 10 7.625Z"
                  fill="#292D32"
                  stroke="#A9A9B0"
                />
              </svg>
              Báo cáo
            </NavLink>
          </li>
          <li className="setting_system">
            <NavLink to="setting" className={navLinkClass}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.68581 18.0427L8.68305 18.0412L4.11496 15.4083C3.16178 14.7653 2.78261 14.4683 2.59076 14.1379C2.40775 13.8227 2.3667 13.4248 2.3667 12.4077V7.59101C2.3667 6.57241 2.40562 6.17344 2.58452 5.85927C2.77035 5.53294 3.13837 5.24078 4.07398 4.60668L8.67512 1.94898L8.6762 1.94835C9.02138 1.74782 9.49266 1.63477 9.98753 1.63477C10.4824 1.63477 10.9537 1.74782 11.2989 1.94836L11.3004 1.94927L15.8851 4.59045C16.8383 5.23339 17.2175 5.53042 17.4093 5.86083C17.5923 6.17602 17.6334 6.57386 17.6334 7.59101V12.3993C17.6334 13.418 17.5944 13.8169 17.4155 14.1311C17.2297 14.4574 16.8617 14.7496 15.9261 15.3837L11.3261 18.0407C11.3259 18.0408 11.3257 18.0409 11.3255 18.0411C10.967 18.2467 10.4907 18.3577 10 18.3577C9.50802 18.3577 9.03362 18.2462 8.68581 18.0427ZM4.2331 4.81649L4.21807 4.82518L4.20367 4.83489L4.18755 4.84578C3.86167 5.06569 3.59379 5.24646 3.38779 5.40949C3.17519 5.57775 2.99258 5.75412 2.86232 5.97867C2.72905 6.20842 2.67398 6.44778 2.64868 6.70368C2.62501 6.94316 2.62502 7.23136 2.62503 7.56793L2.62503 7.59101V12.3993L2.62503 12.4228C2.62502 12.759 2.62501 13.0478 2.64931 13.2882C2.67536 13.5458 2.73206 13.7862 2.86798 14.0174C3.00034 14.2425 3.18564 14.4205 3.40209 14.5916C3.6124 14.7578 3.88617 14.9431 4.22058 15.1694L4.23649 15.1801L4.25133 15.1902L4.26684 15.1991L8.81684 17.8241L8.81705 17.8242C9.163 18.0236 9.60367 18.1035 10.0042 18.1035C10.4047 18.1035 10.8454 18.0236 11.1913 17.8242L11.192 17.8239L15.7753 15.1739L15.791 15.1648L15.8059 15.1547L15.822 15.1437C16.1458 14.9239 16.4122 14.743 16.617 14.5799C16.8285 14.4115 17.01 14.235 17.1395 14.0105C17.2718 13.781 17.3264 13.542 17.3515 13.2864C17.3751 13.0471 17.375 12.759 17.375 12.4223V12.3993V7.59101V7.56758C17.375 7.23131 17.3751 6.94261 17.3508 6.70218C17.3247 6.44454 17.268 6.20414 17.1321 5.97299C16.9997 5.7479 16.8144 5.56984 16.598 5.39875C16.3877 5.23251 16.1139 5.04727 15.7794 4.82097L15.7636 4.81024L15.7487 4.8002L15.7332 4.79126L11.1862 2.168C11.1857 2.16769 11.1852 2.16738 11.1846 2.16707C10.8382 1.96455 10.3984 1.89102 10 1.89102C9.60159 1.89102 9.16173 1.96457 8.81527 2.16717L4.2331 4.81649Z"
                  stroke="#A9A9B0"
                />
                <path
                  d="M10 12.625C8.55114 12.625 7.375 11.4489 7.375 10C7.375 8.55114 8.55114 7.375 10 7.375C11.4489 7.375 12.625 8.55114 12.625 10C12.625 11.4489 11.4489 12.625 10 12.625ZM10 7.625C8.69052 7.625 7.625 8.69052 7.625 10C7.625 11.3095 8.69052 12.375 10 12.375C11.3095 12.375 12.375 11.3095 12.375 10C12.375 8.69052 11.3095 7.625 10 7.625Z"
                  fill="#292D32"
                  stroke="#A9A9B0"
                />
              </svg>
              Cài đặt hệ thống
            </NavLink>
            <button onClick={active_submenu} className="btn_sub_menu">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z"
                  fill="#A9A9B0"
                  stroke="#A9A9B0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99984 10.8327C10.4601 10.8327 10.8332 10.4596 10.8332 9.99935C10.8332 9.53911 10.4601 9.16602 9.99984 9.16602C9.5396 9.16602 9.1665 9.53911 9.1665 9.99935C9.1665 10.4596 9.5396 10.8327 9.99984 10.8327Z"
                  fill="#A9A9B0"
                  stroke="#A9A9B0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99984 5.00065C10.4601 5.00065 10.8332 4.62755 10.8332 4.16732C10.8332 3.70708 10.4601 3.33398 9.99984 3.33398C9.5396 3.33398 9.1665 3.70708 9.1665 4.16732C9.1665 4.62755 9.5396 5.00065 9.99984 5.00065Z"
                  fill="#A9A9B0"
                  stroke="#A9A9B0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {/* Sub menu */}
            <div className="sub_menu">
              <ul>
                <li>
                  <NavLink className={navLinkClass} to="./setting/role">
                    Quản lý vai trò
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClass} to="./setting/account">
                    Quản lý tài khoản
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navLinkClass} to="./setting/history">
                    Nhật ký người dùng
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <button className="log-out">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3335 14.1673L17.5002 10.0007L13.3335 5.83398"
              stroke="#FF7506"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 10H7.5"
              stroke="#FF7506"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
              stroke="#FF7506"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Đăng xuất</p>
        </button>
      </div>
    </div>
  );
};

export default Nav_bar;
