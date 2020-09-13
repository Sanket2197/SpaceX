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

router.get("/get-all-success/:success", async (req, res) => {
  try {
    const launches = await axios.get(
      `${constants.SPACEX_GET_ALL_SUCCESS}${req.params.success}`
    );

    res.json(launches.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: constants.SERVER_ERROR });
  }
});

router.get("/get-all-success-land/:land", async (req, res) => {
  try {
    const launches = await axios.get(
      `${constants.SPACEX_GET_ALL_SUCCESS_LAND}${req.params.land}`
    );
    res.json(launches.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: constants.SERVER_ERROR });
  }
});

router.get("/get-all-success-land-by-year/:year", async (req, res) => {
  try {
    const launches = await axios.get(
      `${constants.SPACEX_GET_BY_YEAR}${req.params.year}`
    );

    res.json(launches.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: constants.SERVER_ERROR });
  }
});

module.exports = router;
