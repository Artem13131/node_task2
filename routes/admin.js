const express = require('express');
const bodyParser = require('body-parser');
const homeController = require("../controllers/homeController.js");

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();

router.get('/',adminController.getarticle);
router.get('/:idArticle',adminController.getArticle)
router.post('/addArticle',adminController.addArticle);
router.post('/editArticle',adminController.editArticle);
router.post('/deleteArticle', adminController.deleteArticle);

module.exports = router;
