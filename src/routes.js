import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Student from './pages/Students'; 

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path="/students" element={<Student />}/>
            </Routes>
        </BrowserRouter>
    );
}
