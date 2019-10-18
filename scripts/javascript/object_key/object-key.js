let data = { id: 0, title: '', body: '' };
const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1');

Object.keys(getPost).filter((key) => key in data).forEach((key) => (data[key] = getPost[key]));
