const loginForm = document.querySelector('#loginForm')  //SE TOMA EL FORMULARIO DE LOGIN POR MEDIO DE ID
loginForm.addEventListener('submit', (e) => { //EVENTO SUBMIT, FUNCION CALL BACK 
    e.preventDefault()
    const email = document.querySelector('#email').value //TOMA VALOR DE LOS CAMPOS INPUT
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []  //SE TRAEN TODOS LOS USUARIOS NUEVOSAL REGISTRO
    const validUser = Users.find(user => user.email === email && user.password === password) //FIND PARA BUSCAR EL EMAIL Y CONTRASEÑA EN LAS EXISTENTES EN USERS
    if (!validUser) { //SI ALGUNO DE LOS CAMBIOS SON UNDEFINED
        return alert('Usuario y/o contraseña incorrectos!') //TERMINA LA FUNCION Y ALERTA
    }
    alert(`Bienvenido ${validUser.name}`) //MUESTRA UNA ALERTA CON SU NOMBRE DE USUARIO
    localStorage.setItem('login_success', JSON.stringify(validUser)) //SI HAY UN USUARIO LOGEADO
    window.location.href = 'index.html' //REDIRECCIONA A LA APLICACION PRINCIPAL



})


