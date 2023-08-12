// Func para publicar comentarios en Page Explorar

const maxComentariosPorReceta = 5;

const comentarios = Array.from({ length: 9 }, (_, i) => ({
  input: document.getElementById(`inputComentario${i + 1}`),
  publicacion: document.querySelector(`.c${i + 1}`),
  contador: 0,
  botonPublicar: document.querySelector(`#btnPublicar${i + 1}`),
  botonPublicarIndex: i + 1,
}));

function publicarVacio(index) {
  comentarios[index].publicacion.innerText =
    "Esta receta aún no tiene comentarios.";
}

function unavailable() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No es posible agregar un nuevo comentario sobre esta receta ahora.',
    footer: '<a href="../comoSumarse.html">Comunícate con nosotros</a>',
  })
}

function publicarComentario(index) {
  const input = comentarios[index].input;
  const publicacion = comentarios[index].publicacion;

  if (comentarios[index].contador < maxComentariosPorReceta) {
    publicacion.innerText = input.value;
    comentarios[index].contador++;
  } else {
    unavailable();
  }
}

function validarComentario(index) {
  const input = comentarios[index].input;

  if (input.value === "") {
    publicarVacio(index);
  } else {
    publicarComentario(index);
  }
}

for (const comentario of comentarios) {
  comentario.botonPublicar.onclick = () => {
    validarComentario(comentario.botonPublicarIndex - 1);
  };
}


