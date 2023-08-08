import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import DashboardPage from './Components/DashboardPage';
import ShipmentsPage from './Components/ShipmentsPage';
import CustomerPage from './Components/CustomerPage';
import ProfilePage from './Components/ProfilePage';

const App = () => {
  const [shipmentData, setShipmentData] = useState([]);

  const addShipment = (newShipment) => {
    setShipmentData([...shipmentData, newShipment]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dashboardpage" element={<DashboardPage shipmentData={shipmentData} />} />
          <Route path="/shipmentspage" element={<ShipmentsPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
