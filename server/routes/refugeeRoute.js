const express = require("express");
const {
    getAllRefugees,
    getRefugeeById,
    createRefugee
} = require("../controllers/refugeeController");

const router = express.Router();

// Get all Refugees
router.route("/refugees").get(getAllRefugees);

// Get Refugee by Id
router.route("/refugees/:id").get(getRefugeeById);

// Create Refugee
router.route("/refugee/new").post(createRefugee);

module.exports = router;