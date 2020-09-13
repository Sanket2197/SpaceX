import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSuccessLaunches } from "../../actions/spacex";
import Launches from "./Launches";
import Spinner from "../utils/Spinner";
const LaunchSuccess = ({ getAllSuccessLaunches, spacex, match }) => {
  useEffect(() => {
    getAllSuccessLaunches(match.params.success);
  }, [getAllSuccessLaunches, match.params.success]);

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

export default connect(mapStateToProps, { getAllSuccessLaunches })(
  LaunchSuccess
);
