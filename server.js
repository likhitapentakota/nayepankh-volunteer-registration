const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let volunteers = [];

/* Register Volunteer */

app.post("/register", (req, res) => {

    volunteers.push(req.body);

    res.json({
        message: "Volunteer Registered Successfully!"
    });

});

/* Get Volunteers */

app.get("/volunteers", (req, res) => {

    res.json(volunteers);

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});