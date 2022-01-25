import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React from 'react';

function App () {
  return (
    <Router>
      <main>
        <Container>
          <h1>Hello</h1>
        </Container>
      </main>
    </Router>
  );
}

export default App;
