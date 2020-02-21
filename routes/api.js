const express = require("express");
const Fetch = require("node-fetch");

module.exports = app => {
  const router = express.Router();
  app.use("/api", router);

  router.get("/users", async (req, res) => {
    const users = await Fetch("https://jsonplaceholder.typicode.com/users");
    res.status(200).json({
      data: await users.json(),
      message: "Users listed"
    });
  });
};
