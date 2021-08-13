const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// new schema for workout document
const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Choose a workout type"
        },
        name: {
            type: String,
            trim: true,
            required: "Name the workout performed"
        },
        duration: {
            type: Number,
            required: "Insert time spent on this workout"
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
      }
    ]
});
// assign a variable
const Workout = mongoose.model("Workout", workoutSchema);
// export
module.exports = Workout;
