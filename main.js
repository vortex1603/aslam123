let name = prompt('Name');

if (name === 'Alex') {
    let pin = prompt('pin');

    if (pin <= 7777) {
    } else {
        console.log('Try again');
        alert('Try again');
    }
} else {
    console.log('User not found');
    alert('User not found');
}
