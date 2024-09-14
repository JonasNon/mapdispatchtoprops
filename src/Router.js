import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './containers/Home'
import About from './components/About'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/car/:id" element={<Car/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    );
};

export default Router;