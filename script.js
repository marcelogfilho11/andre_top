if (!localStorage.getItem('usuarios')) {
    const bancoInicial = [
        { usuario: 'admin', senha: '123' },
        { usuario: 'leticia', senha: '2902' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial)); 
}

// Logica de Login (executa apenas na tela com o formulario)
const formLogin = document.getElementById('form');
if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuarioDigitado = document.getElementById('usuario').value;
        const senhaDigitada = document.getElementById('senha').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));

        const usuarioEncontrado = usuarios.find(function (user) {
            return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
        });

        if (usuarioEncontrado) {
            localStorage.setItem('usuarioLogado', usuarioDigitado);
            window.location.href = 'home.html';
        } else {
            alert('Usuario ou senha incorreta');
        }
    });
}

const formCadastro = document.getElementById('formCadastro');
if(formCadastro){
    formCadastro.addEventListener('submit', function (e){
        e.preventDefault();

        const novoUsuario = document.getElementById('novoUsuario').value.trim();
        const novaSenha = document.getElementById('novaSenha').value.trim();

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        const jaExiste = usuarios.some(function (user){
            return user.usuario.toLowerCase() === novoUsuario.toLowerCase();
        });

        if(jaExiste){
            alert('Esse nome de usuário já existe');
            return;
        }
        usuario.push({usuario:novoUsuario, senha:novaSenha});
        localStorage.setItem('usuarios',JSON.stringify(usuarios));

        alert("Usuario cadastrado na cabeça do melpal");
        window.location.href='home.html';
    })
}