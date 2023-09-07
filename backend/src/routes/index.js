const { Router } = require("express");

const usersRouter = require("./user.routes");
const tasksRouter = require("./task.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/tasks", tasksRouter);

module.exports = routes;
