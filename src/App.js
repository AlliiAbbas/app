import Home from './Component/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Providers from './Component/Providers';
import NotFound from './Component/NotFound';
import './css/app.css'
import Api from './Apis/Api';
function App() {
  return (
    <div className="App">
    
     <Routes>
        <Route path="/app" element = {<Home />} />
        <Route path="/providers" element = {<Providers />} />
        <Route path="/api" element = {<Api />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
