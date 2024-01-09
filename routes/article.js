const express = require('express');
const bodyParser = require('body-parser');
const homeController = require("../controllers/homeController.js");

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = express.json();


router.get('/', articleController.getArticleAll);
router.get('/:idArticle', articleController.getArticle)

module.exports = router;
