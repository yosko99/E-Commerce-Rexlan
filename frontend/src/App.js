import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/partials/Header.component.js';
import Footer from './components/partials/Footer.component.js';
import HomeScreen from './components/screens/HomeScreen.js';
import { Container } from 'react-bootstrap';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
        <main style={{ minHeight: '80vh' }}>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScreen />}/>
            </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
