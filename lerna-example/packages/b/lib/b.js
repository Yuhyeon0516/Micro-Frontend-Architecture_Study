"use strict";

module.exports = b;

const axios = require("axios");

async function b() {
    const res = await axios.get("https://api.github.com/users");

    return res.data;
}
