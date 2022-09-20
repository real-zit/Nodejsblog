const express = require('express');
const router = express.Router();
const {
  blog_index,
  get_create,
  create_post,
  getsingle_post,
} = require('../controllers/blogController');

router.get('/', blog_index);

router.get('/create', get_create);

router.post('/create', create_post);
router.get('/:id', getsingle_post);

module.exports = router;
