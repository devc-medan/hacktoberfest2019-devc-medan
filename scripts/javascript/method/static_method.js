class BePolite {
    static sayHello() {
        console.log('Hello!');
    }
    static sayHelloTo(name) {
        console.log('Hello ' + name + '!');
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // prints 'Hello!'
BePolite.sayHelloTo('Will'); // prints 'Hello Will!'
const sum = BePolite.add(2, 3); // sum = 5