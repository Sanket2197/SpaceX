import React from 'react';
import Launch from './Launch';
import NotFound from '../utils/NotFound';

const Launches = props => {
  return (
    <div className='launch-container'>
      {props && props.launches && props.launches.length > 0 ? (
        props.launches.map(launch => (
          <Launch
            launch={launch}
            key={launch && launch.flight_number && launch.flight_number}
          />
        ))
      ) : (
        <NotFound msg={'No Records Found'} />
      )}
    </div>
  );
};

export default Launches;
