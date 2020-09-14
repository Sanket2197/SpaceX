import React from "react";

const Launch = (props) => {
  return (
    <div className="launch-body">
      <img src={props.launch.links.mission_patch_small} alt="" />
      <h3>{props.launch.rocket.rocket_name}</h3>
      <h4>Mission Ids : </h4>
      <ul>
        {props.launch.mission_id && props.launch.mission_id.length > 0 ? (
          props.launch.mission_id.map((mi) => <li key={mi}>{mi}</li>)
        ) : (
          <li>NA</li>
        )}
      </ul>
      <h4>
        Mission Year : <b>{props.launch.launch_year}</b>
      </h4>
      <h4>
        Successful Launch :
        <b>
          {props.launch.launch_success && props.launch.launch_success
            ? "True"
            : "False"}
        </b>
      </h4>
      <h4>
        Successful Landing :
        <b>
          {props.launch.rocket.first_stage.cores[0].land_success
            ? "True"
            : "False"}
        </b>
      </h4>
    </div>
  );
};

export default Launch;
