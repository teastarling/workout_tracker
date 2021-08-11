const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "cardio"
    },
    {
        type: Schema.Types.ObjectId,
        ref: "resistance"
    }]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
