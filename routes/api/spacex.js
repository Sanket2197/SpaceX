const axios = require("axios");
const express = require("express");
const router = express.Router();

const constants = require("../../common/constants/constants");

router.get("/get-all-launches", async (req, res) => {
  try {
    const launches = await axios.get(constants.SPACEX_GET_ALL);

    res.json(launches.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: constants.SERVER_ERROR });
  }
});

router.get(
  "/get-all-by-filter/:year/:launch_success/:land_success",
  async (req, res) => {
    try {
      let apiQuery = constants.SPACEX_BASE;

      if (req.params.year !== "undefined") {
        apiQuery += `&launch_year=${req.params.year}`;
      }

      if (req.params.launch_success !== null) {
        if (req.params.launch_success == "true") {
          apiQuery += `&launch_success=true`;
        } else if (req.params.launch_success == "false") {
          apiQuery += `&launch_success=false`;
        }
      }
      if (req.params.land_success !== null) {
        if (req.params.land_success == "true") {
          apiQuery += `&land_success=true`;
        } else if (req.params.land_success == "false") {
          apiQuery += `&land_success=false`;
        }
      }

      const launches = await axios.get(apiQuery);

      res.json(launches.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: constants.SERVER_ERROR });
    }
  }
);

module.exports = router;
