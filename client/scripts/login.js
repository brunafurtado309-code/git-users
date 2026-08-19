const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const checkbox = document.querySelector('input[type="checkbox"]');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return;
    }

    if (
        emailValue !== sessionStorage.getItem('email') ||
        passwordValue !== sessionStorage.getItem('password')
    ) {
        alert('E-mail e/ou senha incorreto.');
        return;
    }

    alert('Acesso permitido.');

});

checkbox.addEventListener('change', () => {
   const attributeValue = password.getAttribute('type');

   if (attributevalue === 'password') {
    return password.setAttribute('type', 'text');
   labelpassword.textcontent = 'ocultar senha';
   return;
   }

   password.setAttribute('type', 'password');
   labelpassword.textContent = 'ocultar senha'

   }
);
