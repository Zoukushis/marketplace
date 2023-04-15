import React from 'react';
import {Routes, Route} from "react-router-dom"
import PublicLayout from '../PublicLayout/PublicLayout';
import Home from '../Home/Home';
import Error from '../../../_utils/Error';
import Collection from '../../Collection/Collection';


const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<PublicLayout/>}>
                <Route index element={<Home/>}/>

                <Route path="/home" element= {<Home/>}/>
                <Route path='/collection' element={<Collection/>}/>
                <Route path="*" element= {<Error/>}/>
            </Route>
        </Routes>
    );
};

export default PublicRoute;