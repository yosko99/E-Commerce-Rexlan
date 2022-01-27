import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriesScreen from './components/screens/CategoriesScreen.js';
import Header from './components/partials/Header.component.js';
import Footer from './components/partials/Footer.component.js';
import HomeScreen from './components/screens/HomeScreen.js';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path='/' exact element={<HomeScreen />}/>
          </Routes>
          <Routes>
            <Route path='/category/:subcategory' exact element={<CategoriesScreen />}/>
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
