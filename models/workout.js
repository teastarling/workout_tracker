const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
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
    },
    duration: {
        type: Number,
        required: "Insert time spent on this workout"
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
