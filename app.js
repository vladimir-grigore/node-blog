/* app.js */

// require and instantiate express
const app = require('express')();

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Vlad',
    title: 'Lorem ipsum',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    author: 'Jane',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Jimmy',
    title: 'I need some coffee',
    body: 'Blog post number 4'
  },
];

// set the view engine to ejs
app.set('view engine', 'ejs');

// blog home page
app.get('/', function(req, res){
  // render `home.ejs` with the list of posts
  res.render('home', { posts : posts });
});

//blog post
app.get('/post/:id', function(req, res){
  // find the post in the `posts` array
  const post = posts.filter(function(post){
    return post.id == req.params.id;
  })[0];

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

app.listen(8080);
console.log('listening on port 8080')