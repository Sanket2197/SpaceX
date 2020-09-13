import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllLaunchesByYear } from "../../actions/spacex";
import Launches from "./Launches";
import Spinner from "../utils/Spinner";
const LaunchesYear = ({ getAllLaunchesByYear, spacex, match }) => {
  useEffect(() => {
    getAllLaunchesByYear(match.params.year);
  }, [getAllLaunchesByYear, match.params.year]);

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

export default connect(mapStateToProps, { getAllLaunchesByYear })(LaunchesYear);
