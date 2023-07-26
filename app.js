//comoSumarse page

let div = document.createElement("div");
let parrafo = document.createElement("p");

function msjErrorNombre () {
  div.innerHTML = '<p class="sesionIniciada2" style="color: red;"> Por favor, escribe tu nombre. </p>';
  document.body.append(div);
}

function msjErrorApellido () {
  div.innerHTML = '<p class="sesionIniciada2" style="color: red;"> Por favor, escribe tu apellido. </p>';
  document.body.append(div);
}

function msjErrorEmail () {
  div.innerHTML = '<p class="sesionIniciada2" style="color: red;"> Por favor, escribe un correo electrónico válido. </p>';
  document.body.append(div);
}

function msjErrorClave () {
  div.innerHTML = '<p class="sesionIniciada2" style="color: red;"> Por favor, escribe la clave correcta. </p>';
  document.body.append(div);
}

function msjFormEnviado () {
  div.innerHTML = '<p class="sesionIniciada2" style="color: green;"> Datos enviados correctamente. </p>'+'<p class="sesionIniciada2" style="color: green;"> <strong>¡Gracias por ser parte de esta comunidad! </strong> </p>';
  document.body.append(div);
}


const nombre = document.getElementById ("nombre");
const apellido = document.getElementById ("apellido");
const email = document.getElementById ("email");
const clave = document.getElementById ("password");



//No me funciona la validación del correo.
//Falta desarrollar la validación de nombre y apellido.

function validarEmail () {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(mailFormat)) {
    console.log("El correo es correcto");
    return true;
  } else {
    msjErrorEmail();
    email.focus();
    return false;
  }
}


function validar (){
  
  if (nombre.value === "" ) {
    msjErrorNombre();
    nombre.focus();
    return false;
  } else if (apellido.value === "") {
    msjErrorApellido();
    apellido.focus();
    return false;
  } else if (email.value === "") {
    validarEmail();
  } else if (clave.value !== "123" ) {
    msjErrorClave();
    clave.focus();
    return false;
  } else {
    msjFormEnviado ();
  }
}



function saludar () {
  let saludo = document.getElementById("saludo");
  saludo.innerHTML = '<p class="sesionIniciada" style="color: green;"> Hola, ' + nombre.value + '</p>';
}

function storage () {
  const enJSON1 = JSON.stringify(nombre.value);
  const enJSON2 = JSON.stringify(apellido.value);
  const enJSON3 = JSON.stringify(email.value);
  const enJSON4 = JSON.stringify(clave.value);


  localStorage.setItem("nombre", enJSON1);
  localStorage.setItem("apellido", enJSON2);
  localStorage.setItem("email", enJSON3);
  localStorage.setItem("password", enJSON4);
}

function sesionIniciada () {
  
  const element = document.querySelector ("#btnSesion");
  const element2 = document.querySelector("#sesionOut");

  element.remove();
  element2.replaceWith(saludar());
}


let botonEnviar = document.getElementById("btnEnviar");


//explorar page

const inputComent = document.getElementById ("inputComentario");
const inputComent2 = document.getElementById ("inputComentario2");
const inputComent3 = document.getElementById ("inputComentario3");
const inputComent4 = document.getElementById ("inputComentario4");
const inputComent5 = document.getElementById ("inputComentario5");
const inputComent6 = document.getElementById ("inputComentario6");
const inputComent7 = document.getElementById ("inputComentario7");
const inputComent8 = document.getElementById ("inputComentario8");
const inputComent9 = document.getElementById ("inputComentario9");



function publicarVacio () {
  const publicacion = document.querySelector(".c1");

  publicacion.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio2 () {
  const publicacion2 = document.querySelector(".c2");

  publicacion2.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio3 () {
  const publicacion3 = document.querySelector(".c3");

  publicacion3.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio4 () {
  const publicacion4 = document.querySelector(".c4");

  publicacion4.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio5 () {
  const publicacion5 = document.querySelector(".c5");

  publicacion5.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio6 () {
  const publicacion6 = document.querySelector(".c6");

  publicacion6.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio7 () {
  const publicacion7 = document.querySelector(".c7");

  publicacion7.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio8 () {
  const publicacion8 = document.querySelector(".c8");

  publicacion8.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}

function publicarVacio9 () {
  const publicacion9 = document.querySelector(".c9");

  publicacion9.replaceWith(innerText = "Esta receta aún no tiene comentarios.");
}





function publicarComentario () {
  const publicacion = document.querySelector(".c1");

  publicacion.replaceWith(innerText = inputComent.value);
}

function publicarComentario2 () {
  const publicacion2 = document.querySelector(".c2");

  publicacion2.replaceWith(innerText = inputComent2.value);
}

function publicarComentario3 () {
  const publicacion3 = document.querySelector(".c3");

  publicacion3.replaceWith(innerText = inputComent3.value);
}

function publicarComentario4 () {
  const publicacion4 = document.querySelector(".c4");

  publicacion4.replaceWith(innerText = inputComent4.value);
}

function publicarComentario5 () {
  const publicacion5 = document.querySelector(".c5");

  publicacion5.replaceWith(innerText = inputComent5.value);
}

function publicarComentario6 () {
  const publicacion6 = document.querySelector(".c6");

  publicacion6.replaceWith(innerText = inputComent6.value);
}

function publicarComentario7 () {
  const publicacion7 = document.querySelector(".c7");

  publicacion7.replaceWith(innerText = inputComent7.value);
}

function publicarComentario8 () {
  const publicacion8 = document.querySelector(".c8");

  publicacion8.replaceWith(innerText = inputComent8.value);
}

function publicarComentario9 () {
  const publicacion9 = document.querySelector(".c9");

  publicacion9.replaceWith(innerText = inputComent9.value);
}



function validarComentario () {
  if (inputComent.value === "") {
    publicarVacio();
  } else {
    publicarComentario();
  }
}
function validarComentario2 () {
  if (inputComent2.value === "") {
    publicarVacio2();
  } else {
    publicarComentario2();
  }
}
function validarComentario3 () {
  if (inputComent3.value === "") {
    publicarVacio3();
  } else {
    publicarComentario3();
  }
}
function validarComentario4 () {
  if (inputComent4.value === "") {
    publicarVacio4();
  } else {
    publicarComentario4();
  }
}
function validarComentario5 () {
  if (inputComent5.value === "") {
    publicarVacio5();
  } else {
    publicarComentario5();
  }
}
function validarComentario6 () {
  if (inputComent6.value === "") {
    publicarVacio6();
  } else {
    publicarComentario6();
  }
}
function validarComentario7 () {
  if (inputComent7.value === "") {
    publicarVacio7();
  } else {
    publicarComentario7();
  }
}
function validarComentario8 () {
  if (inputComent8.value === "") {
    publicarVacio8();
  } else {
    publicarComentario8();
  }
}
function validarComentario9 () {
  if (inputComent9.value === "") {
    publicarVacio9();
  } else {
    publicarComentario9();
  }
}


let botonPublicar = document.querySelector("#btnPublicar")
let botonPublicar2 = document.querySelector("#btnPublicar2")
let botonPublicar3 = document.querySelector("#btnPublicar3")
let botonPublicar4 = document.querySelector("#btnPublicar4")
let botonPublicar5 = document.querySelector("#btnPublicar5")
let botonPublicar6 = document.querySelector("#btnPublicar6")
let botonPublicar7 = document.querySelector("#btnPublicar7")
let botonPublicar8 = document.querySelector("#btnPublicar8")
let botonPublicar9 = document.querySelector("#btnPublicar9")


//Ejecución

botonEnviar.onclick = () => {validar() + storage() + sesionIniciada()}

//Como hacer que se aplique a todas las pages de HTML?

botonPublicar.onclick = () => {validarComentario()};
botonPublicar2.onclick = () => {validarComentario2()}; 
botonPublicar3.onclick = () => {validarComentario3()};
botonPublicar4.onclick = () => {validarComentario4()};
botonPublicar5.onclick = () => {validarComentario5()};
botonPublicar6.onclick = () => {validarComentario6()};
botonPublicar7.onclick = () => {validarComentario7()};
botonPublicar8.onclick = () => {validarComentario8()};
botonPublicar9.onclick = () => {validarComentario9()};






