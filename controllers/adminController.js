const Models = require("…/models/adminModel.js");

exports.getArticleAll = async function(req, res) {
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
};

exports.getArticle = async function(req, res) {
    let m = await Models.get0ne(req.params.idArticle)
    res.render('admin ArticleS how', {data:m});
}

exports.addArticle = async function(req, res){
    await Models.addOne(req.body);
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
};

exports.editArticle = async function(req, res){
    await Models.edition(req.body);
    let m = await Models.get0ne(req.body.idArticle);
    res.render('admin ArticleS how', {data:m});
};

exports.deleteArticle = async function(req, res){
    await Models.deleteOne();
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
}