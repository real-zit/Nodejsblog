const Blog = require('../models/blogModel');

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', {
        title: 'All Blogs',
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getsingle_post = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog' });
    })
    .catch((err) => {
      console.log(err);
    });
};
const get_create = (req, res) => {
  res.render('create', { title: 'Create a New Blog' });
};

const create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  get_create,
  create_post,
  getsingle_post,
};
