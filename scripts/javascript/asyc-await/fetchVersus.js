/* Promise */
const endpoint = "https://jsonplaceholder.typicode.com/users/";
function fetchWithPromise(id) {
  fetch(endpoint + id)
    .then(response => {
      return response.json();
    })
    .then(user => {
      console.log(user);
    });
}

/* Async/Await */
async function fetchWithAsyncAwait(id) {
  let response = await fetch(endpoint + id);
  response = await response.json();
  console.log(response);
}

fetchWithPromise(1);
fetchWithAsyncAwait(1);
