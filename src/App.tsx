import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard_layout from "./page/admin/dashboard";
import Device_layout from "./page/admin/device_page/device";
import Number_layout from "./page/admin/number_page/number";
import Service_layout from "./page/admin/service_page/service";
import Setting_layout from "./page/admin/setting/setting";
import Statement_layout from "./page/admin/statement_page/statement";
import Admin_layout from "./layouts/admin";
import Login from "./page/user/login";
import Re_password from "./page/user/re_password";
import Forgot_password from "./page/user/forgot_password";
import Info_user from "./page/user/user";
import New_number from "./page/admin/number_page/number_new";
import Detail_number from "./page/admin/number_page/detail_number";
import Add_device_page from "./page/admin/device_page/add_device_page";
import Detail_device_page from "./page/admin/device_page/detail_device_page";
import Update_device_page from "./page/admin/device_page/update_device_page";
import Add_service from "./page/admin/service_page/add_service";
import Detail_service from "./page/admin/service_page/detail_service";
import Update_service from "./page/admin/service_page/update_service";
import User_layout from "./layouts/user";
import Manage_role from "./page/admin/setting/manage_role";
import Manage_acount from "./page/admin/setting/manage_account";
import Manage_history from "./page/admin/setting/manage_history";
import New_role_page from "./page/admin/setting/new_role";
import Update_role from "./page/admin/setting/update_role";
import Add_account from "./page/admin/setting/add_account";
import Update_account from "./page/admin/setting/update_account";

function App() {
    return (
        <div className="App">
            <Routes>

                {/* <Route path="" element={<User_layout />}>
                    <Route index element={<Login />}></Route>
                    <Route path="repass" element={<Re_password />}></Route>
                    <Route path="forgotpass" element={<Forgot_password />}></Route>
                </Route> */}
                {/* Admin */}
                <Route path="" element={<Admin_layout />}>
                    <Route path="dashboard" element={<Dashboard_layout />}></Route>
                    <Route path="user" element={<Info_user />}></Route>
                    <Route path="device" element={<Device_layout />}></Route>
                    <Route path="device/new" element={<Add_device_page />}></Route>
                    <Route path="device/:id" element={<Detail_device_page />}></Route>
                    <Route path="device/update/:id" element={<Update_device_page />}></Route>
                    <Route path="service" element={<Service_layout />}></Route>
                    <Route path="service/new" element={<Add_service />}></Route>
                    <Route path="service/:id" element={<Detail_service />}></Route>
                    <Route path="service/update/:id" element={<Update_service />}></Route>
                    <Route path="number" element={<Number_layout />}></Route>
                    <Route path="number/:id" element={<Detail_number />}></Route>
                    <Route path="number/new" element={<New_number />}></Route>
                    <Route path="statement" element={<Statement_layout />}></Route>
                    <Route path="setting" element={<Setting_layout />}>
                        <Route path="role" element={<Manage_role />}></Route>
                        <Route path="role/new" element={<New_role_page />}></Route>
                        <Route path="role/:id" element={<Update_role />}></Route>
                        <Route path="account" element={<Manage_acount />}></Route>
                        <Route path="account/new" element={<Add_account />}></Route>
                        <Route path="account/:id" element={<Update_account />}></Route>
                        <Route path="history" element={<Manage_history />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div >
    );
}

export default App;
