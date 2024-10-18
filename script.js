// First number input using SweetAlert
Swal.fire({
    title: 'Enter the First Number',
    input: 'number',
    inputAttributes: {
        placeholder: 'Type a number...',
    },
    confirmButtonText: 'Next',
}).then((result1) => {
    if (result1.value !== undefined) {
        const number1 = parseInt(result1.value);

        // Second number input using SweetAlert
        Swal.fire({
            title: 'Enter the Second Number',
            input: 'number',
            inputAttributes: {
                placeholder: 'Type another number...',
            },
            confirmButtonText: 'Find Larger',
        }).then((result2) => {
            if (result2.value !== undefined) {
                const number2 = parseInt(result2.value);

                // Logic to determine the larger number
                if (number1 > number2) {
                    Swal.fire('Result', `The first number (${number1}) is larger.`, 'success');
                } else if (number1 === number2) {
                    Swal.fire('Result', 'Both numbers are equal.', 'info');
                } else {
                    Swal.fire('Result', `The second number (${number2}) is larger.`, 'success');
                }
            } else {
                Swal.fire('Oops!', 'You didn\'t enter the second number.', 'error');
            }
        });
    } else {
        Swal.fire('Oops!', 'You didn\'t enter the first number.', 'error');
    }
});
