
// 1. Anonymous Async Function
let main = (async function() {
  let value = await doAsync();
})();


// 2. Async Function Declaration
let main = async function() {
  let value = await doAsync();
};

//3. Async Function Assignment
let main = async () => {
  let value = await doAsync();
};

//4. Async Function as Argument
document.body.addEventListener('click', async function() {
  let value = await doAsync();
});


//5 Object & Class Methods
let obj = {
  async method() {
    let value = await doAsync();
  }
};

class MyClass {
  async myMethod() {
    let value = await doAsync();
  }
}



