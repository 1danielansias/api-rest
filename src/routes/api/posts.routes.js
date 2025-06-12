const router = require("express").Router();

const { getAll, getById, create, edit, remove } = require("../../controllers/posts.controller");
const { checkPostId } = require("../../middlewares/posts.middleware");

router.get("/", getAll);
router.get("/:id", checkPostId, getById);

router.post('/', create);
router.put('/:id', checkPostId, edit);
router.delete('/:id', checkPostId, remove);

module.exports = router;