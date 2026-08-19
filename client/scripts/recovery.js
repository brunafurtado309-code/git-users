
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return;
    }

    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('password', passwordValue);

    alert('Usuário registrado com sucesso.');

      window.location.href = './login.html';

});


const email = document.querySelector('input[type="email"]');
const newpassword = document.querySelector('#new-password');
const confirmPassword = document.querySelector('#confirm-password');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newpassword.value;
    const confirmPasswordValue = confirmPassword.value;

    if (emailvalue !== sessionStorage.getItem("email")) {
        return alert('email não registrado');
    }

    if (newpasswordvalue !== confirmPasswordValue) {
        return alert('As senhas não coincidem.');
    }

    sessionStorage.setItem('password', newPasswordValue);
    alert('Senha atualizada com sucesso.');
    window.location.href = './login.html';

      window.location.href = './login.html';
});

