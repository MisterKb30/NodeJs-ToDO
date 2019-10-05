const List = require('../models/list');

exports.getList = (req, res, next) => {
    res.render('lists', {
        pageTitle: 'To Do List',
        path: 'lists'
    });
}

