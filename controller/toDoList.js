const Todolist = require('../model/createlist');


exports.getTodoList = (req, res, next) => {
  Todolist.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('admin/add-todolist', {
        prods: rows,
        pageTitle: 'To Do List',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};