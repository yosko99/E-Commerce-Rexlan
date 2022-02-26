import { Button, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OffCanvas = ({ buttonText, title, body }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
        <Button variant="info" className='w-75 text-uppercase' onClick={handleShow}>
          { buttonText }
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{ title }</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body onSubmit={handleClose}>
            { body }
          </Offcanvas.Body>
        </Offcanvas>
      </>
  );
};

OffCanvas.propTypes = {
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired
};

export default OffCanvas;
