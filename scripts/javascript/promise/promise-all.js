const getPost = () => fetch("https://jsonplaceholder.typicode.com/posts/1");
const getAuthor = id =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);
const getComment = id =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);

var a = getPost().then(res => res.json()); // #1 get post
var b = a.then(res => getAuthor(res.id)).then(res => res.json()); // #2 get author
var c = a.then(res => getComment(res.id)).then(res => res.json()); //#3 get comment
Promise.all([a, b, c]).then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
