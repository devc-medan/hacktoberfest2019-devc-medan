class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR');
    }
    
    deposit(amount) {
        console.log('Depositing ' + amount + ' EUR');
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Withdrawal denied!');
        } else {
            console.log('Withdrawing ' + amount + ' EUR');
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccount('Will Alexander', 500);

//call method and see the output
newAccount.withdraw(501); // prints Withdrawal denied!
newAccount.showBalance(); // prints Balance: 500 EUR

