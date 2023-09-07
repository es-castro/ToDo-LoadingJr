exports.up = (knex) =>
  knex.schema.createTable("tasks", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid());
    table.text("title");
    table.text("description");
    table.enu("status", ["pending", "in_progress", "completed"]);
    table
      .uuid("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("tasks");
