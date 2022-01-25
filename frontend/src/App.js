import Header from './components/screens/partials/Header.component.js';
import Footer from './components/screens/partials/Footer.component.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React from 'react';

function App () {
  return (
    <Router>
      <Header />
        <main style={{ minHeight: '80vh' }}>
          <Container>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
