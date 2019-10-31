async function fetchWithAsyncAwait(id) {
  try {
    let response = await fetch(endpoint + id);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.log("opps" + error);
  }
}
