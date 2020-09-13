import React from 'react';

const NotFound = ({ msg }) => {
  return (
    <div className='card'>
      <i className='fa fa-frown-o not-found'></i>
      <h3>Opps</h3>
      <h4>{msg}</h4>
    </div>
  );
};

export default NotFound;
