const { Router } = require("express");
const TasksController = require("../controllers/TasksController");

const tasksRoutes = Router();

const tasksController = new TasksController();

tasksRoutes.get("/", tasksController.index);
tasksRoutes.get("/:id", tasksController.show);
tasksRoutes.post("/:user_id", tasksController.create);
tasksRoutes.delete("/:id", tasksController.delete);

module.exports = tasksRoutes;
