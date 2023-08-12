//Func clima en Page Novedades

function calor () {
    contenedor = document.querySelector('#conteiner-condicion');
    comentarioCondic = document.querySelector("#comentario-condicion");

    contenedor.innerHTML += `
    <div class="cardClima">
        <p class="subtitle2"> "La receta ideal para un día como hoy es Brownie con Helado!" </p>
    </div>
    `
    comentarioCondic.innerHTML += `
    <div class="cardComentClima">
        <img src="../images/brownie2.jpg" />    
    </div>
    `

}

function frio () {
    contenedor = document.querySelector('#conteiner-condicion');
    comentarioCondic = document.querySelector("#comentario-condicion");

    contenedor.innerHTML += `
    <div class="cardClima">
        <p class="subtitle2"> "La receta ideal para un día como hoy son unos fideos caseros de remolacha!" </p>
    </div>
    `
    comentarioCondic.innerHTML += `
    <div class="cardComentClima">
        <img src="../images/fideosConRemolacha.jpg" />
    </div>
    `
}

function errorInesperado() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No es posible acceder a los datos del clima en este momento. Por favor, inténtelo más tarde.',
      footer: '<a href="../comoSumarse.html">Comunícate con nosotros</a>',
    })
  }
  
  const btn = document.querySelector('#btnClima');
  
  btn.addEventListener('click', () => {
      const key = "0ca063b746578ffb14d9f9455bdb165a";
      let ciudad = document.querySelector('#ciudad').value;
      ciudad = encodeURIComponent(ciudad);
      //console.log(ciudad)
  
      if (ciudad !== "") {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`

          const contenedor = document.querySelector('#conteiner-condicion');
          const comentarioCondic = document.querySelector("#comentario-condicion");
          contenedor.innerHTML = "";
          comentarioCondic.innerHTML = "";
    
          fetch(url)
              .then((res) => {
                  return res.json()
              })
              .then((clima) => {
  
                  let ciudad = clima.name;
                  let pais = clima.sys.country;
                  let html = document.querySelector('#ciudadElegida');
                  html.innerHTML = "En " + ciudad + ", " + pais;
  
                  let tempMax = clima.main.temp_max;
                  let tempMaxC = tempMax - 273.15;
                  let html2 = document.querySelector('#temperaturaMax');
                  html2.innerHTML = "La temperatura máxima hoy es:" + tempMaxC.toFixed(0) + "º";
  
                  let tempMin = clima.main.temp_min;
                  let tempMinC = tempMin - 273.15;
                  let html3 = document.querySelector('#temperaturaMin');
                  html3.innerHTML = "La temperatura mínima hoy es:" + tempMinC.toFixed(0) + "º";

                  if (tempMaxC < 17){
                    frio();
                  }else{
                    calor();
                  }
  
              })
              .catch(() => {
                  errorInesperado();
              })
      }
  
  })



  