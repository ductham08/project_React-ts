import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/user/login";
import Re_password from "./components/user/re_password";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="login" element={<Login />}></Route>
                <Route path="forgotpass" element={<Re_password />}></Route>
            </Routes>
        </div>
    );
}

export default App;
