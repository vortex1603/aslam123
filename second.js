let name = prompt('Name');

if (name === 'Alex') {
    let pin = prompt('pin');

    if (pin <= 7777) {
        let balance = prompt('How much do you want to shoot');

        if (balance == 10000) {
            console.log('Thank you');
            alert('Thank you');

            let initialBalance = 10000;
            let remainingBalance = initialBalance - balance;

            console.log(`Remaining balance inside the card: ${remainingBalance} so you shoot ${balance}`);
            alert(`Remaining balance inside the card: ${remainingBalance} so you shoot ${balance}`);
        } else {
            console.log('Insufficient funds');
            alert('Insufficient funds');
        }
    } else {
        console.log('Try again');
        alert('Try again');
    }
} else {
    console.log('User not found');
    alert('User not found');
}
