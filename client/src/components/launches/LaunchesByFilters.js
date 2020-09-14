import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLaunchDetailsByFilters } from "../../actions/spacex";
import Launches from "./Launches";
import Spinner from "../utils/Spinner";
const LaunchesByFilters = ({ getLaunchDetailsByFilters, spacex, filters }) => {
  useEffect(() => {
    getLaunchDetailsByFilters(filters);
  }, [getLaunchDetailsByFilters, filters]);

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
  filters: state.spacex.filters,
  spacex: state.spacex,
});

export default connect(mapStateToProps, { getLaunchDetailsByFilters })(
  LaunchesByFilters
);
