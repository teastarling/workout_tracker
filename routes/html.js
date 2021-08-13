const router = require("express").Router();
const path = require("path");
// get the stats html file
router.get("/stats", (req, res) => res.sendFile(path.join(__dirname, "../public/stats.html")));
// get the exercise html file
router.get("/exercise", (req, res) => res.sendFile(path.join(__dirname, "../public/exercise.html")));
// export
module.exports = router