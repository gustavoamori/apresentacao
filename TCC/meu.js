// Método querySelector
const btn = document.querySelector('.btn');
btn.style.background = '#1f1f1f';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const registroInput = document.querySelector('#registro');
const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
if (registroInput.value === '' ) {



} else {
// console.log('sucess');
const li = document.createElement('li');
li.appendChild(
document.createTextNode(
`${registroInput.value}  `
)
);
userList.appendChild(li);
// Limpa o formulário
registroInput.value = '';
emailInput.value = '';
horario.getElementsByTagName('option')[0].selected = 'selected';
nameInput.focus(); //Coloca o foco no elmento
}
}