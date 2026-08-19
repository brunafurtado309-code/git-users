const button = document.getElementById('myButton');
const title = document.querySelector('h1');

button.addEventListener('click', () => {
   const value =confirm( 'Deseja realmente sair?');

   if (!value) return;

   button.style.display = 'none';
   title.textContent = ' Saindo...';

   setTimeout(() => {
    title.textContent = 'saindo.';
   },100);

   setTimeout(() => {
    title.textContent = 'saindo..';
   },200);

    setTimeout(() => { 
        window.location.href = './login.html';
    }, 300);
})