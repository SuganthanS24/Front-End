import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Form from './component/Form';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import QRCode from './component/QrCode';
import QnA from './component/QnA'; // Adjust path if needed
import VisitRobomiracle from './component/VisitRobomiracle';
import CustomProfile from './component/CustomProfile';
import ViewContent from './component/ViewContent';
import SliderAndCards from './component/SliderAndCards';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Routes>
            <Route path="/" element={<SliderAndCards/>} />
            <Route path="/form" element={<Form />} />
            <Route path="/weblinks" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/qrcode" element={<QRCode />} />
            <Route path="/qa" element={<QnA />} />
            <Route path="/Visit-Robomiracle" element={<VisitRobomiracle/>} />
            <Route path="/custom-profile" element={<CustomProfile/>} />
            <Route path="/view-content" element={<ViewContent/>}/>

           

           
                      
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;