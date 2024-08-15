function withdraw(people, amount) {
    if (amount > people.balance) {
        console.log("Transaction cannot be completed due to insufficient funds");
    } else {
        people.balance -= amount;
        console.log("Transaction is completed successfully");
    }
}

let people = {
    name: "Eric",
    balance: 90000 // Corrected the balance property
};

withdraw(people, 100000); 
withdraw(people, 8000);  
