import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProjectTemplate from "./ProjectTemplate/ProjectTemplate";
import MainPage from "./MainPage/MainPage";

function Router() {
    return (
        <Routes>
            <Route path='/code-browser' element={<ProjectTemplate/>}/>
            <Route path='/projects' element={<MainPage/>}/>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    );
}

export default Router;
