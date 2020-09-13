import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllLaunches } from '../../actions/spacex';

import Spinner from '../utils/Spinner';
import Launches from '../launches/Launches';

const Dashboard = ({ getAllLaunches, spacex }) => {
  useEffect(() => {
    getAllLaunches();
  }, [getAllLaunches]);

  return (
    <div>
      {spacex && spacex.loading && spacex.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Launches launches={spacex && spacex.launches && spacex.launches} />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  spacex: state.spacex
});

export default connect(mapStateToProps, { getAllLaunches })(Dashboard);
