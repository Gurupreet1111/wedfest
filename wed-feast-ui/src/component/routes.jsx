import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import About from './about';
import Contact from './contact';
import Vendor from './vendor/vendor';
import FilterView from './segments/filterview';

const Navigation = () => {
    return (
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/vendor' element={< Vendor />}></Route>
            <Route exact path='/filtersegment/:vendorID/:segment' element={< FilterView />}></Route>

        </Routes>
    )
}
export default Navigation;