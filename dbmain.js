const knex = require("./db/database");

// // drop table
// knex.schema
//   .dropTable("articulos")
//   .then(() => console.log("table borrada"))
//   .catch((error) => console.log(error));

// // creo table
// knex.schema
//   .createTable("articulos", (table) => {
//     table.string("nombre");
//     table.string("codigo");
//     table.float("precio");
//     table.integer("stock");
//     table.increments("id");
//   })
//   .then(() => console.log("Tabla creada"))
//   .catch((error) => console.log(error));

// // articulos
// const articulos = [
//   { nombre: "articulo1", codigo: "art1", precio: 1, stock: 10 },
//   { nombre: "articulo2", codigo: "art2", precio: 2, stock: 20 },
//   { nombre: "articulo3", codigo: "art3", precio: 3, stock: 30 },
//   { nombre: "articulo4", codigo: "art4", precio: 4, stock: 40 },
//   { nombre: "articulo5", codigo: "art5", precio: 5, stock: 50 },
// ];

// // insert de articulos
// knex("articulos")
//   .insert(articulos)
//   .then(() => console.log("Articulos insertados"))
//   .catch((error) => {
//     console.log(error);
//     throw error;
//   })
//   .finally(() => {
//     knex.destroy();
//   });

// mostrar tabla de articulos por consola
knex
  .from("articulos")
  .select("*")
  .then((rows) => {
    for (const row of rows) {
      console.log(`${row["id"]} ${row["nombre"]} ${row["precio"]}`);
    }
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    knex.destroy();
  });
