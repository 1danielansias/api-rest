const Post = require("../models/posts.model");

const checkPostId = async (req, res, next) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.getById(id);
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    req.post = post; // Añadir el post al objeto de solicitud para que esté disponible en las siguientes funciones middleware o controladores
    next(); // Llamar a next() para pasar al siguiente middleware o controlador
}

module.exports = { checkPostId }