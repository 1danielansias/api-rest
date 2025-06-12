const Posts = require("../models/posts.model"); // Referencia al modelo de posts
const Autores = require("../models/autores.model"); // Referencia al modelo de autores
const formatPost = require("../utils/formatPost"); // Utilidad para formatear los posts

const getAll = async (req, res) => {
  const posts = await Posts.getAll(); // Llamada al modelo para obtener todos los posts
  const formattedPosts = posts.map(formatPost); // Formatear los posts
  res.json(formattedPosts); // Respuesta con los posts obtenidos
};

const getById = async (req, res) => {
  res.json(formatPost(req.post));
};

const create = async (req, res) => {

  const { autor_id } = req.body;
  // Validar autor_id 
  if (autor_id) {
    if (isNaN(autor_id)) {
      return res
        .status(404)
        .json({ message: "Invalid author ID" });
    }

    const authorExists = await Autores.getById(autor_id);
    if (!authorExists) {
      return res.status(404).json({ error: "Author not found" });
    }
  }

  const result = await Posts.insert(req.body);
  const post = await Posts.getById(result.insertId); // Obtener el post recién creado
  res.json(formatPost(post)); // Respuesta con el post creado
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { autor_id } = req.body;

  // Validar autor_id si viene en el cuerpo de la solicitud
  if (autor_id) {
    if (isNaN(autor_id)) {
      return res
        .status(404)
        .json({ message: "Invalid author ID" });
    }

    const authorExists = await Autores.getById(autor_id);
    if (!authorExists) {
      return res.status(404).json({ error: "Author not found" });
    }
  }

  await Posts.updateById(id, req.body);
  const post = await Posts.getById(id);
  res.json(formatPost(post));
};

const remove = async (req, res) => {
  const { id } = req.params;
  await Posts.deleteById(id);
  res.json(formatPost(req.post));
};

module.exports = { getAll, getById, create, edit, remove };
