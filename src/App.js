import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './Commponents/Menu';
import Container from './Commponents/Container';

import Dashboards from './Apps&Pages/Dashboards';
import ECommerce from './Apps&Pages/ECommerce';
import Academy from './Apps&Pages/Academy';
import Logistics from './Apps&Pages/Logistics';
import Users from './Apps&Pages/Users';
import Email from './Apps&Pages/Email';
import Chat from './Apps&Pages/Chat';
import Calendar from './Apps&Pages/Calender';
import Kanban from './Apps&Pages/Kanban';
import Invoice from './Apps&Pages/Invoice';
import RolesAndPermissions from './Apps&Pages/RolesAndPremissed';
import MainContainer from './Commponents/MainContainer';


function App() {
  return (
<Router>
      <div className="App">
        <Menu /> {/* Render the Menu component */}
        <Container> {/* Container now wraps the Routes */}
          <Routes>
            <Route path="/" element={<Dashboards />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/email" element={<Email />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/rolesAndPermissions" element={<RolesAndPermissions />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
