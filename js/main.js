//Func Inicio sesion

const cerrarSession = document.getElementById('botonCerrarSesion')


document.addEventListener("DOMContentLoaded", function() {
    let registerBtn = document.getElementById("registerBtn");
    let modal = document.getElementById("myModal");
    let closeButton = document.getElementsByClassName("close")[0];
    let registrationForm = document.getElementById("registrationForm");
    let userNameElement = document.getElementById("userName");

    registerBtn.onclick = function() {
        modal.style.display = "block";
    };

    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let usernameInput = document.getElementById("username");
        let emailInput = document.getElementById("email");
        let birthdayInput = document.getElementById("birthday");
        let passwordInput = document.getElementById("password");

        let userData = {
        username: usernameInput.value,
        email: emailInput.value,
        birthday: birthdayInput.value,
        password: passwordInput.value
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        userNameElement.textContent = userData.username;
        modal.style.display = "none";
    });


    let savedData = localStorage.getItem("userData");

    if (savedData) {
        let userData = JSON.parse(savedData);
        userNameElement.textContent = userData.username;
    }

    cerrarSession.addEventListener('click', () => {
        localStorage.removeItem('userData');
        location.reload();
    });

});


//Aviso suscripción

Toastify({

    text: "Ey! Fíjate de estar suscripto para recibir novedades.",
    duration: 15000,
    gravity: "top",
    position: 'center',
    close: true,
    style: {
    background: "linear-gradient(to right, #de2688, #ca8fe3)",
    }

    }).showToast();






//Aviso para publicar en Page Mis recetas


function aviso () {
    Swal.fire({
        title: 'Seguro quieres publicar esta receta?',
        text: "De todas maneras, puedes solicitar que sea dada de baja en cualquier momento.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, publicar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Publicada!',
            'A la brevedad tu receta estará disponible para toda la comunidad.',
            'success'
          )
        }
      })
  }
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    let btnPrivado = document.querySelector("#btnPrivado");
    btnPrivado.onclick = () => { aviso() };
  
    let btnPrivado2 = document.querySelector("#btnPrivado2");
    btnPrivado2.onclick = () => { aviso() };
  });
  

  //Shopping List page

const list = document.querySelector("#shoppingList");
const input = document.querySelector("#listItem");
const listButton = document.querySelector("#listBtn");

listButton.addEventListener ('click', () => {
    const newItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newItem;

    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener ("click", () => {
        list.removeChild(listItem);
    })

    input.focus();
})
