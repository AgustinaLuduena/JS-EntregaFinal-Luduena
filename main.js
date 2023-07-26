//Variables, Funciones, Objetos y Arrays

const cantidadRecetas = [
    {nombre: 'Veganas', cantidad: 3},
    {nombre: 'Vegetarianas', cantidad: 6},
    {nombre: 'Con Carne', cantidad: 2},
]


function menu() {
    console.log ("-------------------------------");
    console.log("Información útil para saber qué buscar en la web:")
    console.log ("-------------------------------");

    console.log ("Tipos de rectas que se pueden encontrar:");
    const nombres = cantidadRecetas.map((el) => el.nombre);
    console.log(nombres);
    
    console.log ("-------------------------------");

    console.log ("¿Hay recetas Veganas? : ");
    console.log( cantidadRecetas.some((rec) => rec.nombre == "Veganas"));
    console.log ("¿Hay recetas sin TACC? : ");
    console.log( cantidadRecetas.some((rec) => rec.nombre == "SIN TACC"));
    console.log ("Cuántas recetas con carne hay? : ");
    console.log( cantidadRecetas.find((rec) => rec.nombre == "Con Carne"));

}



function Receta (id, nombre, comensal, minutos) {
    this.id = id;
    this.nombre = nombre;
    this.comensal = comensal;
    this.minutos  = minutos;
}
const receta1 = new Receta(0, "Pastel de Papas", "Vegan, Vegetariano o con carne", 40);
const receta2 = new Receta(1, "Tarta de Calabaza", "Vegan o Vegetariano", 35);
const receta3 = new Receta(2, "Wok", "Vegan, Vegetariano o con carne", 30);
const receta4 = new Receta(3, "Fideos de remolacha con pesto", "Vegan o Vegetariano", 70);


function salir() {
    alert("Gracias por visitar nuestra web!")
}



function publicarReceta() {

      const listaRecetas = [receta1, receta2, receta3, receta4];

      console.log("El último número de ID utilizado es:");
      console.log(listaRecetas.indexOf (receta4));
      console.log ("-------------------------------");
      


      const id = parseInt(prompt("Ingrese el ID de la nueva receta:"));
      const nombre = prompt("Ingrese el nombre de la nueva receta:");
      const comensal = prompt(`Ingrese la descripción de los comensales de la nueva receta ("Vegan, Vegetariano o con carne"):`);
      const minutos = parseInt(prompt("Ingrese el tiempo de preparación en minutos de la nueva receta:"));
      
      const nuevaReceta = new Receta(id, nombre, comensal, minutos);
      listaRecetas.push(nuevaReceta);
      
      console.log(listaRecetas);


    seleccionarAccion();
}





function datoNombre () {
    let nombre;

    while (true) {
        nombre = prompt ("Ingresar nombre/s y apellido/s:");

        if (nombre !== "") {
            break;
        }
        alert("Este campo es obligatorio.");
    }  


    console.log("Nombre: " + nombre);
}

function datoTelefono () {
    let telefono;

    while (true) {
        telefono = parseInt(prompt ("Ingresar teléfono de contacto (SIN ESPACIOS):"));

        if (telefono !== "" && !isNaN(telefono)) {
            break;
        }
        alert("Número de teléfono no válido. Ingrese otro.");
    }  

    console.log("Número de teléfono: " + telefono);

}

function datoCorreo () {
    let mail;

    while (true) {
        mail = prompt ("Ingresar correo electrónico:");

        if (mail != "") {
            break;
        }
        alert("Este campo es obligatorio.");
    }

    console.log("Correo: " + mail);
    console.log("-------------------------------");
}

function iniciarSesion () {
    datoNombre();
    datoTelefono();
    datoCorreo();
    console.log ("-------------------------------");
    publicarReceta();

}




function verDetalles() {
    const listaRecetas = [receta1, receta2, receta3, receta4];
    const seleccionarReceta = prompt(`¿De qué receta te interesa ver más detalles? Ingresá el número de receta que querés ver (formato = "receta1"):`);
    
    switch (seleccionarReceta) {
      case "receta1":
        console.log("Ingredientes:");
        console.log("- Papas (y/o calabaza)");
        console.log("- Lentejas, Champigñones, Soja texturizada o Carne picada");
        console.log("- Salsa de tomate");
        console.log("- Queso (opcional)");
        console.log("- Condimentos (a gusto)");
        seleccionarAccion();
        break;
      case "receta2":
        console.log("Ingredientes:");
        console.log("- Calabaza o zapallo tipo Cabutia");
        console.log("- Masa de tarta (puede ser integral)");
        console.log("- Queso (opcional)");
        console.log("- Huevos (opcional)");
        console.log("- Condimentos (a gusto)");
        seleccionarAccion();
        break;
      case "receta3":
        console.log("Ingredientes:");
        console.log("- Arroz (puede ser integral)");
        console.log("- Verduras (a gusto)");
        console.log("- Queso (opcional)");
        console.log("- Manteca (opcional)");
        console.log("- Condimentos (a gusto)");
        console.log("- Salsa de soja (opcional)");
        seleccionarAccion();
        break;
      case "receta4":
        console.log("Ingredientes:");
        console.log("- Fideos (a gusto)");
        console.log("- Remolachas");
        console.log("- Albahaca ");
        console.log("- Nueces (opcional)");
        console.log("- Aceite neutro");
        console.log("- Queso (opcional)");
        seleccionarAccion();
        break;
      default:
        alert("Lo sentimos. Faltan detalles de esta receta. Intente de nuevo más tarde.")

    }
  }


function elegir () {
    let elegirAccion;

    while (true) {
        elegirAccion = prompt ("Si desea ver más detalles de la receta, escriba `1`. Si desea ver otra receta, escriba `2`. Si desea ingresar una receta propia ingrese `3`. Si desea salir, escriba `4`.");

        if (elegirAccion == 1) {
            verDetalles();
            break; 
        } else if (elegirAccion == 2) {
            seleccionarReceta();
            break; 
        } else if (elegirAccion == 3) {
            iniciarSesion();
            break; 
        } else if (elegirAccion == 4) {
            salir();
            break; 
        } else {
            console.log("Error: Debe ingresar una opción válida.");
        }
    }
      
}



function seleccionarReceta(){

    let op = prompt(`¿Qué receta te interesa? Ingresá el número de receta que querés ver (formato = "receta1"):`);

    switch(op){
        case "receta1": 
            console.log ("Ver receta de Pastel de Papas.")
            for (const propiedad in receta1) {
                console.log(receta1 [propiedad]);
            }
            elegir();
            break;
        case "receta2":
            console.log ("Ver receta de Tarta de Calabaza.")
            for (const propiedad in receta2) {
                console.log(receta2 [propiedad]);
            }
            elegir();
            break;
        case "receta3":
            console.log ("Ver receta de Wok.")
            for (const propiedad in receta3) {
                console.log(receta3 [propiedad]);
            }
            elegir();
            break;
        case "receta4":
            console.log ("Ver receta de Fideos de remolacha con pesto.")
            for (const propiedad in receta4) {
                console.log(receta4 [propiedad]);
            }
            elegir();
            break;
        default: 
            terminarEjecucion = true;
    }
}

function seleccionarAccion () {
    console.log ("-------------------------------");
    console.log ("¿Qué desea hacer?")
    console.log ("1: Ver las recetas disponibles.")
    console.log ("2: Publicar una nueva receta.")
    console.log ("3: Solo ver la web.")
    console.log("--------------------------");
    
        let op = prompt("Ingrese el número de la acción que desea realizar:");
    
        switch(op){
            case "1": 
                console.log("Las recetas disponibles para ver son:");
                console.log("receta1 = Pastel de Papas");
                console.log("receta2 = Tarta de Calabaza");
                console.log("receta3 = Wok");
                console.log("receta3 = Fideos de remolacha con pesto");
                console.log("--------------------------");
                seleccionarReceta();
                break;
            case "2":
                console.log ("Publicar una nueva receta.");
                iniciarSesion();
                break;
            case "3":
                console.log ("-------------------------------");
                console.log ("Gracias por visitar nuestra web!");
                break;
            default: 
                terminarEjecucion = true;
        }
    }







//Ejecución

console.log ("-------------------------------");
console.log ("¡Bienvenidx!")
console.log ("En este sitio podrás encontrar diferentes propuestas gastronómicas.");
console.log ("-------------------------------");

//menu();
//seleccionarAccion();

/*if (terminarEjecucion) {
    console.log("La ejecución ha sido interrumpida debido a que se ha seleccionado una opción no válida.");
    } else {
        alert ("Gracias por visitar nuestra web!")
    }




const cantidadRecetas = [
    {nombre: 'Veganas', cantidad: 3},
    {nombre: 'Vegetarianas', cantidad: 6},
    {nombre: 'Con Carne', cantidad: 2},
]


function Receta (id, nombre, comensal, minutos) {
    this.id = id;
    this.nombre = nombre;
    this.comensal = comensal;
    this.minutos  = minutos;
}
const receta1 = new Receta(0, "Pastel de Papas", "Vegan, Vegetariano o con carne", 40);
const receta2 = new Receta(1, "Tarta de Calabaza", "Vegan o Vegetariano", 35);
const receta3 = new Receta(2, "Wok", "Vegan, Vegetariano o con carne", 30);
const receta4 = new Receta(3, "Fideos de remolacha con pesto", "Vegan o Vegetariano", 70);

*/

let lista = document.getElementById ("lista");
let recetas = ["Veganas", "Vegetarianas", "Con carne", "Sin TACC"];

let li = document.createElement("li");

for (const receta of recetas) {
    let li = document.createElement("li");
    li.innerHTML = receta;
    lista.appendChild(li);

}

const opcion = document.getElementById("opcionElegida");

function storageOpc () {
    const opEnJSON = JSON.stringify(opcion.value);
    localStorage.setItem("opcion", opEnJSON);
}
function seleccionarAccion () {
        switch(opEnJSON){
            case "1":
                document.body.append("Las recetas disponibles para ver son:");
                document.body.append("receta1 = Pastel de Papas");
                document.body.append("receta2 = Tarta de Calabaza");
                document.body.append("receta3 = Wok");
                document.body.append("receta3 = Fideos de remolacha con pesto");
                document.body.append("--------------------------");
                seleccionarReceta();
                break;
            case "2":
                document.body.append ("Publicar una nueva receta.");
                break;
            case "3":
                document.body.append ("-------------------------------");
                document.body.append ("Gracias por visitar nuestra web!");
                break;
            default: 
                terminarEjecucion = true;
        }
    }



seleccionarAccion();