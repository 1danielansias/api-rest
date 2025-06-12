const db = require("../config/db");

const getAll = async () => {
  const [result] = await db.query(
    "SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, autores.id AS autor_id, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen FROM posts JOIN autores ON posts.autor_id = autores.id"
  );
  return result;
};

const getById = async (id) => {
  const [result] = await db.query(
    "SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, autores.id AS autor_id, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen FROM posts JOIN autores ON posts.autor_id = autores.id WHERE posts.id = ?",
    [id]
  );
  if (result.length === 0) return null;
  return result[0];
};

const insert = async ({ titulo, descripcion, categoria, autor_id }) => {
  const [result] = await db.query(
    "INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)",
    [titulo, descripcion, new Date(), categoria, autor_id]
  );
  return result;
};

const updateById = async (id, { titulo, descripcion, categoria, autor_id }) => {
  const [result] = await db.query(
    "UPDATE posts SET titulo = ?, descripcion = ?, categoria = ?, autor_id = ? WHERE id = ?",
    [titulo, descripcion, categoria, autor_id, id]
  );
  return result;
};

const deleteById = async (id) => {
  const [result] = await db.query("DELETE FROM posts WHERE id = ?", [id]);
  return result;
};

module.exports = { getAll, getById, insert, updateById, deleteById };
