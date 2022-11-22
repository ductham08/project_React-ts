import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forgot_password from "./components/user/forgot_password";
import Login from "./components/user/login";
import Re_password from "./components/user/re_password";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="repass" element={<Re_password />}></Route>
                <Route path="forgotpass" element={<Forgot_password />}></Route>
            </Routes>
        </div>
    );
}

export default App;
