import ProductDetailsScreen from './components/screens/ProductDetailsScreen.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesScreen from './components/screens/CategoriesScreen.js';
import ProductsScreen from './components/screens/ProductsScreen.js';
import Header from './components/partials/Header.component.js';
import Footer from './components/partials/Footer.component.js';
import HomeScreen from './components/screens/HomeScreen.js';
import Screen404 from './components/screens/Screen404.js';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path='/' exact element={<HomeScreen />}/>
            <Route path='/category/:subcategory' element={<CategoriesScreen />}/>
            <Route path='/products/category/:subcategory' element={<ProductsScreen />}/>
            <Route path='/products/id/:id' element={<ProductDetailsScreen />}/>
            <Route path='*' exact element={<Screen404 />}/>
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
