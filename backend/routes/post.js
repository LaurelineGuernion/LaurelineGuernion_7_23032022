const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');
const auth = require('../middelware/auth');
const multer = require('../middelware/multer-config');

//////////////////// ROUTES POST ////////////////////
router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.allPosts);
router.put('/:id', auth, multer, postCtrl.modifyPost);
router.delete('/:id', auth, multer, postCtrl.deletePost);

module.exports = router;