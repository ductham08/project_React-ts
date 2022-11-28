import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard_layout from "./page/admin/dashboard";
import Device_layout from "./page/admin/device";
import Number_layout from "./page/admin/number";
import Service_layout from "./page/admin/service";
import Setting_layout from "./page/admin/setting";
import Statement_layout from "./page/admin/statement";
import Admin_layout from "./layouts/admin";
import User_layout from "./layouts/user";
import Login from "./page/user/login";
import Re_password from "./page/user/re_password";
import Forgot_password from "./page/user/forgot_password";
import Info_user from "./page/user/user";

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
                    <Route path="service" element={<Service_layout />}></Route>
                    <Route path="number" element={<Number_layout />}></Route>
                    <Route path="statement" element={<Statement_layout />}></Route>
                    <Route path="setting" element={<Setting_layout />}></Route>
                </Route>
            </Routes>
        </div >
    );
}

export default App;
