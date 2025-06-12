const Autores = require("../models/autores.model");

const checkAutorId = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid author ID" });
    }

    const autor = await Autores.getById(id);
    if (!autor) {
        return res.status(404).json({ message: "Author not found" });
    }

    req.autor = autor; 
    next(); 
}

module.exports = { checkAutorId }