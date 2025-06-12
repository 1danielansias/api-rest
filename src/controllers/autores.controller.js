const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autores.getAll(); 
    res.json(autores);
}

const getById = async (req, res) => {
    res.json(req.autor);
}

const getPostsByAutorId = async (req, res) => {
    const { id } = req.params;
    const posts = await Autores.getPostsByAutorId(id);
    res.json(posts);
}

const create = async (req, res) => {
    const result = await Autores.insert(req.body);
    const autor = await Autores.getById(result.insertId); 
    res.json(autor); 
}

const edit = async (req, res) => {
    const { id } = req.params;
    await Autores.updateById(id, req.body);
    const autor = await Autores.getById(id);
    res.json(autor);
}

const remove = async (req, res) => {
    const { id } = req.params;
    await Autores.deleteById(id);
    res.json(req.autor);
}

module.exports = { getAll, getById, getPostsByAutorId, create, edit, remove }