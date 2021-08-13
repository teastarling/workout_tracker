const router = require("express").Router();
const Workout = require("../models/workout.js");
// post route for creating a new workout document
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// aggregate all exercise durations for most recent exercise and display sum total
router.get("/api/workouts/", (req, res) => {
  Workout.aggregate(
    [
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration"
          }
        }
      }
    ]
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// display sum total of durations in descending order for the 7 most recent exercises
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate(
    [
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration"
          }
        }
      }
    ]
    ).sort({ day: -1 }).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// push new exercise array to document according to user input
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body
    }
  }, {new: true, runValidators: true})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
});
// export
module.exports = router;