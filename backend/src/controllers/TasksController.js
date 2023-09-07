const knex = require("../database/knex");

class TasksController {
  async create(request, response) {
    const { title, description, status } = request.body;

    const { user_id } = request.params;

    await knex("tasks").insert({
      title,
      description,
      status: "pending",
      user_id,
    });

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const task = await knex("tasks").where({ id }).first();

    return response.json(task);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("tasks").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { user_id, title } = request.query;

    const tasks = await knex("tasks")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");

    return response.json(tasks);
  }
}

module.exports = TasksController;
