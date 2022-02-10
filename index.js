const express = require("express");
const cors = require("cors");
const ratelimit = require("express-rate-limit")


require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const limiter = ratelimit( {
    windowMs: 10 * 60 * 100,
    max: 100
})

app.use(limiter)
app.use('/', require('./routes'))
app.use(cors());

app.listen(PORT, () => console.log("server is running"));
app.set('trust proxy', 1)