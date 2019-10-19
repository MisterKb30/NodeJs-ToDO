const TodoList = require('../model/createlist');

exports.getAddTodoList = (req, res, next) => {
  res.render('admin/add-todolist', {
    pageTitle: 'To Do List',
    path: '/'
  });
};

exports.postAddTodoList = (req, res, next) => {
  const message = req.body.title;
  const todolist = new TodoList(message);
  todolist
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};