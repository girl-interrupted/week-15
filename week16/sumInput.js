function sumInput() {
    let inputs = [];
    let sum = 0;  

    while (true) { 
        let i = + prompt("please enter a number");
        
        if (i == '' || isNaN(i)) {
            break;
        }
        inputs.push(i);

        inputs.sort(function ascendingNums(num1, num2) {
            return num1 - num2;
            })
        }

    for (i = 0; i < inputs.length; i++) {
        sum += inputs[i];
        }

    alert(inputs);
    alert(sum);
}
