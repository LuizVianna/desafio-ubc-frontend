import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Student from './pages/Students'; 
import NewStudent from './pages/Student';

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />}/>
                <Route path="/students" element={<Student />}/>
                <Route path="/student/new/:studentid" element={<NewStudent />}/>
            </Routes>
        </BrowserRouter>
    );
}
