import React from "react";
import { NavLink } from "react-router-dom";

const LaunchFilters = () => {
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
  return (
    <div className="filter-box">
      <h3>Filters</h3>
      <div className="launch-yr">
        <h4>Launch Year</h4>
        <hr />
        <div className="launch-yr-row">
          {years.map((year) => (
            <span key={year}>
              <NavLink to={`/year/${year}`}>{year}</NavLink>
            </span>
          ))}
        </div>

        <h4>Successful Launch</h4>
        <hr />
        <div className="launch-yr-row">
          <span>
            <NavLink to="/success/true">True</NavLink>
          </span>
          <span>
            <NavLink to="/success/false">False</NavLink>
          </span>
        </div>

        <h4>Successful Landing</h4>
        <hr />
        <div className="launch-yr-row">
          <span>
            <NavLink to="/launch-land-success/true">True</NavLink>
          </span>
          <span>
            <NavLink to="/launch-land-success/false">False</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaunchFilters;
