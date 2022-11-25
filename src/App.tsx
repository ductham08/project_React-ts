import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard_layout from "./components/admin/dashboard";
import Device_layout from "./components/admin/device";
import Number_layout from "./components/admin/number";
import Service_layout from "./components/admin/service";
import Setting_layout from "./components/admin/setting";
import Statement_layout from "./components/admin/statement";
import Forgot_password from "./components/user/forgot_password";
import Login from "./components/user/login";
import Re_password from "./components/user/re_password";
import Info_user from "./components/user/user";
import Admin_layout from "./layouts/admin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="repass" element={<Re_password />}></Route>
                <Route path="forgotpass" element={<Forgot_password />}></Route>
                {/* Admin */}
                <Route path="admin" element={<Admin_layout />}>
                    <Route index element={<Dashboard_layout />}></Route>
                    <Route path="user" element={<Info_user />}></Route>
                    <Route path="device" element={<Device_layout />}></Route>
                    <Route path="service" element={<Service_layout />}></Route>
                    <Route path="number" element={<Number_layout />}></Route>
                    <Route path="statement" element={<Statement_layout />}></Route>
                    <Route path="setting" element={<Setting_layout />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
