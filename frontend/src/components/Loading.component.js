import loadingProperties from '../resources/default/loadingProperties';
import { Spinner } from 'react-bootstrap';
import React from 'react';

// eslint-disable-next-line react/display-name
const Loading = React.forwardRef((_props, ref) => (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">{loadingProperties.loading}</span>
        </Spinner>
    </div>
));

export default Loading;
