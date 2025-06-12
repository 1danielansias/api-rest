const formatPost = (post) => {
  return {
    id: post.id,
    titulo: post.titulo,
    descripcion: post.descripcion,
    fecha_creacion: post.fecha_creacion,
    categoria: post.categoria,
    autor: {
      id: post.autor_id,
      nombre: post.autor_nombre,
      email: post.autor_email,
      imagen: post.autor_imagen
    }
  };
};

module.exports = formatPost;