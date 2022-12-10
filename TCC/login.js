function logar() {

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    //validação
    if(login == "admin" && senha == "admin") {
        alert('Seu login foi conluído!');
        location.href = "noticias.html";
    }

    else{
        alert('Usuario ou senha incorretos!');
    }
}