import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary components for routing

import Menu from './Commponents/Menu';
import Dashboards from './Apps&Pages/Dashboards.js';
import Container from './Commponents/Container';
import ECommerce from './Apps&Pages/ECommerce.js';
import Academy from './Apps&Pages/Academy.js'
import Logistics from './Apps&Pages/Logistics.js';
import Users from './Apps&Pages/Users.js';
import Email from './Apps&Pages/Email.js';
import Chat from './Apps&Pages/Chat.js';
import Calender from './Apps&Pages/Calender.js';
import Kanban from './Apps&Pages/Kanban.js';
import Invoice from './Apps&Pages/Invoice.js';
import RolesAndPremissed from './Apps&Pages/RolesAndPremissed.js'

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="App">
        <Menu /> {/* Render the Menu component */}
        <Routes>  {/* Define the Routes */}
          <Route path="/" element={<Dashboards />} />  {/* Default route */}
          <Route path="/dashboards" element={<Container />} />
          <Route path="/eCommerce" element={<ECommerce />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/email" element={<Email />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/rolesAndPremissed" element={<RolesAndPremissed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
