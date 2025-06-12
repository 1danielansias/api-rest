const db = require("../config/db");

const getAll = async () => {
  const [result] = await db.query("SELECT * FROM autores");
  return result;
};

const getById = async (id) => {
    const [result] = await db.query("SELECT * FROM autores WHERE id = ?", [id]);
    if (result.length === 0) return null;
    return result[0];
}

const getPostsByAutorId = async (id) => {
    const [result] = await db.query(
        "SELECT * FROM posts WHERE autor_id = ?",
        [id]
    );
    return result;
}

const insert = async ({ nombre, email, imagen }) => {
    const [result] = await db.query(
        "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
        [nombre, email, imagen]
    );
    return result;
}

const updateById = async (id, { nombre, email, imagen }) => {
    const [result] = await db.query(
        "UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?",
        [nombre, email, imagen, id]
    );
    return result;
}

const deleteById = async (id) => {
    const [result] = await db.query("DELETE FROM autores WHERE id = ?", [id]);
    return result;
}

module.exports = { getAll, getById, getPostsByAutorId, insert, updateById, deleteById };