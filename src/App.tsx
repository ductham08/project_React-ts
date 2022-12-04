import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard_layout from "./page/admin/dashboard";
import Device_layout from "./page/admin/device_page/device";
import Number_layout from "./page/admin/number_page/number";
import Service_layout from "./page/admin/service";
import Setting_layout from "./page/admin/setting";
import Statement_layout from "./page/admin/statement";
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

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="repass" element={<Re_password />}></Route>
                <Route path="forgotpass" element={<Forgot_password />}></Route>
                {/* Admin */}
                <Route path="admin" element={<Admin_layout />}>
                    <Route path="dashboard" element={<Dashboard_layout />}></Route>
                    <Route path="user" element={<Info_user />}></Route>
                    <Route path="device" element={<Device_layout />}></Route>
                    <Route path="device/new" element={<Add_device_page />}></Route>
                    <Route path="device/:id" element={<Detail_device_page />}></Route>
                    <Route path="device/update/:id" element={<Update_device_page />}></Route>
                    <Route path="service" element={<Service_layout />}></Route>
                    <Route path="number" element={<Number_layout />}></Route>
                    <Route path="number/:id" element={<Detail_number />}></Route>
                    <Route path="number/new" element={<New_number />}></Route>
                    <Route path="statement" element={<Statement_layout />}></Route>
                    <Route path="setting" element={<Setting_layout />}></Route>
                </Route>
            </Routes>
        </div >
    );
}

export default App;
