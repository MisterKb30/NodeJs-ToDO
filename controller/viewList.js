const Data = require('../models/data');

exports.getData = (req, res, next) => {
    const data = Data.fetchAll();
    res.render('display', {
      dt:data,
      pageTitle: 'Display',
      path: '/',
    });
  };