
import React from 'react';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import PublicRoute from './pages/Public/PublicRoute/PublicRoute';

const App = () => {

  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/*" element={<PublicRoute/>}/>
            
        </Routes>
          
        </BrowserRouter>
    </div>
  );
};

export default App;