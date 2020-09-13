import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSuccessLaunchesLanded } from "../../actions/spacex";
import Launches from "./Launches";
import Spinner from "../utils/Spinner";
const LaunchLandSuccess = ({ getAllSuccessLaunchesLanded, spacex, match }) => {
  useEffect(() => {
    getAllSuccessLaunchesLanded(match.params.land);
  }, [getAllSuccessLaunchesLanded, match.params.land]);

  return (
    <div>
      {spacex && spacex.loading && spacex.loading ? (
        <Spinner />
      ) : (
        <Launches launches={spacex && spacex.launches && spacex.launches} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  spacex: state.spacex,
});

export default connect(mapStateToProps, { getAllSuccessLaunchesLanded })(
  LaunchLandSuccess
);
