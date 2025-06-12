const router = require('express').Router();

const { getAll, getById, getPostsByAutorId, create, edit, remove } = require('../../controllers/autores.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');

router.get('/', getAll);
router.get('/:id', checkAutorId, getById);
router.get('/:id/posts', checkAutorId, getPostsByAutorId);

router.post('/', create);
router.put('/:id', checkAutorId, edit); 
router.delete('/:id', checkAutorId, remove);

module.exports = router;