
document.getElementById('show-password').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.classList.add('active');
        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        this.classList.remove('active');
        this.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});
