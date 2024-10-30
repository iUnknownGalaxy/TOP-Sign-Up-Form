const pwdInput = document.getElementById('password');
const repeatPwdInput = document.getElementById('confirm-pass');
const pwdStatus = document.querySelector(".pwd-status");

function updatePasswordStatus() {
    if (pwdInput.value === repeatPwdInput.value) {
        pwdStatus.style.visibility = 'hidden';
        pwdInput.setCustomValidity("");;
        repeatPwdInput.setCustomValidity("");
    } else {
        pwdStatus.style.visibility = 'visible';
        pwdInput.setCustomValidity("invalid field");
        repeatPwdInput.setCustomValidity("invalid field");
    }
}

document.getElementById('phone').addEventListener('input', function(e) {
    // Remove all non-digit characters from the input
    let input = e.target.value.replace(/\D/g, '');

    // Add dashes at the appropriate positions
    if (input.length > 6) {
        input = input.slice(0, 3) + '-' + input.slice(3, 6) + '-' + input.slice(6, 10);
    } else if (input.length > 3) {
        input = input.slice(0, 3) + '-' + input.slice(3, 6);
    }

    // Set the formatted value back to the input
    e.target.value = input;
});

pwdInput.addEventListener('input', updatePasswordStatus);
repeatPwdInput.addEventListener('input', updatePasswordStatus);