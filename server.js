const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// choose a port
const PORT = process.env.PORT || 3000;

const app = express();
// show results in terminal
app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// static public folder
app.use(express.static("public"));
// connecting to mongodb database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
// require api and html routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
// begin listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});