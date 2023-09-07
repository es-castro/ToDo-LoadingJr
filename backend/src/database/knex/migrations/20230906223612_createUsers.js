exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid());
    table.text("name");
    table.text("email");
    table.text("password_hash");
    table.text("avatar");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
