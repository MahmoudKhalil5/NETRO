import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import eCommerce from './pages/eCommerce.jsx';
import Academy from './pages/Academy.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Email from './pages/Email.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"element={<Dashboard/>}/>
          <Route path="/eCommerce"element={<eCommerce/>}/>
          <Route path="/email"element={<Email/>}/>
          <Route path="/academy"element={<Academy/>}/>
          <Route path="/product"element={<Product/>}/>
          <Route path="/productList"element={<ProductList/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>

  );
}

export default App;
