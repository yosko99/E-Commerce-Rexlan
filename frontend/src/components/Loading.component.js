import loadingProperties from '../resources/default/loadingProperties';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/display-name
const Loading = ({ height = '50vh' }) => (
    <div className='d-flex justify-content-center align-items-center' style={{ height }}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">{loadingProperties.loading}</span>
        </Spinner>
    </div>
);

Loading.propTypes = {
  height: PropTypes.string
};

export default Loading;
