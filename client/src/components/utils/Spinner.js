import React, { Fragment } from 'react';
import spinner from './Spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        borderRadius: '50%',
        position: 'absolute',
        top: '30%',
        left: '45%'
      }}
      alt='Loading...'
    />
  </Fragment>
);
