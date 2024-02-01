function solve(button) {
    const operation = document.getElementById('oper').value;
    const x = parseFloat(document.getElementsByClassName('inputClass1')[0].value);
    const y = parseFloat(document.getElementsByClassName('inputClass2')[0].value);

    if (isNaN(x) || isNaN(y)) {
        console.log("Please enter valid numbers for X and Y.");
        return;
    }

    let result;
    switch (operation) {
        case 'multiplication':
            result = x * y;
            break;
        case 'division':
            result = x / y;
            break;
        case 'addition':
            result = x + y;
            break;
        case 'substraction':
            result = x - y;
            break;
        default:
            console.log("Invalid operation selected.");
            return;
    }
    console.log(result);
}
