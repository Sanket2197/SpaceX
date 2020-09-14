import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { updateFilters } from "../../actions/spacex";
import Spinner from "../utils/Spinner";
const LaunchFilters = ({ updateFilters, filters, loading }) => {
  let URL = "";
  let [activeColorYear, setActionColorYear] = useState([
    { key: 2006, value: false },
    { key: 2007, value: false },
    { key: 2008, value: false },
    { key: 2009, value: false },
    { key: 2010, value: false },
    { key: 2011, value: false },
    { key: 2012, value: false },
    { key: 2013, value: false },
    { key: 2014, value: false },
    { key: 2015, value: false },
    { key: 2016, value: false },
    { key: 2017, value: false },
    { key: 2018, value: false },
    { key: 2019, value: false },
    { key: 2020, value: false },
  ]);

  const getActiveValue = (yearKey) => {
    const i = activeColorYear.findIndex((obj) => obj.key === yearKey);
    return activeColorYear[i].value;
  };

  const [activeColorSuccessActive, setActiveColorSuccessActive] = useState(
    false
  );
  const [activeColorSuccessInActive, setActiveColorSuccessInActive] = useState(
    false
  );
  const [activeColorLandActive, setActiveColorLandActive] = useState(false);
  const [activeColorLandInActive, setActiveColorLandInActive] = useState(false);

  const history = useHistory();

  const handleYearClick = (e, value) => {
    updateFilters({ ...filters, year: value });
    URL = `/launches/year=${value}&launch_success=${filters.launch_success}&land_success=${filters.land_success}`;
    const index = activeColorYear.findIndex((year) => year.key === value);
    activeColorYear[index].value = true;
    for (let i = 0; i < activeColorYear.length; i++) {
      if (i !== index) {
        activeColorYear[i].value = false;
      }
    }
    history.push(URL);
  };

  const handleSuccessLaunchClick = (e, value) => {
    updateFilters({ ...filters, launch_success: value });
    URL = `/launches/year=${filters.year}&launch_success=${value}&land_success=${filters.land_success}`;
    if (e.target.name === "launch-true") {
      setActiveColorSuccessActive(true);
      setActiveColorSuccessInActive(false);
    } else {
      setActiveColorSuccessActive(false);
      setActiveColorSuccessInActive(true);
    }
    history.push(URL);
  };

  const handleSuccessLandClick = (e, value) => {
    updateFilters({ ...filters, land_success: value });
    URL = `/launches/year=${filters.year}&launch_success=${filters.land_success}&land_success=${value}`;
    if (e.target.name === "land-true") {
      setActiveColorLandActive(true);
      setActiveColorLandInActive(false);
    } else {
      setActiveColorLandActive(false);
      setActiveColorLandInActive(true);
    }

    history.push(URL);
  };

  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  return loading ? (
    <Spinner />
  ) : (
    <div className="filter-box">
      <h3>Filters</h3>
      <div className="launch-yr">
        <h4>Launch Year</h4>
        <hr />
        <div className="launch-yr-row">
          {activeColorYear.map((year) => (
            <span key={year.key}>
              <button
                onClick={(e) => handleYearClick(e, year.key)}
                className={`active-${getActiveValue(year.key)}`}
                name={year.key}
              >
                {year.key}
              </button>
            </span>
          ))}
        </div>

        <h4>Successful Launch</h4>
        <hr />
        <div className="launch-yr-row">
          <span>
            <button
              onClick={(e) => handleSuccessLaunchClick(e, true)}
              className={`active-${activeColorSuccessActive}`}
              name="launch-true"
            >
              True
            </button>
          </span>
          <span>
            <button
              onClick={(e) => handleSuccessLaunchClick(e, false)}
              className={`active-${activeColorSuccessInActive}`}
              name="launch-false"
            >
              False
            </button>
          </span>
        </div>

        <h4>Successful Landing</h4>
        <hr />
        <div className="launch-yr-row">
          <span>
            <button
              onClick={(e) => handleSuccessLandClick(e, true)}
              className={`active-${activeColorLandActive}`}
              name="land-true"
            >
              True
            </button>
          </span>
          <span>
            <button
              onClick={(e) => handleSuccessLandClick(e, false)}
              className={`active-${activeColorLandInActive}`}
              name="land-false"
            >
              False
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.spacex.filters,
  loading: state.spacex.loading,
});

export default connect(mapStateToProps, { updateFilters })(LaunchFilters);
