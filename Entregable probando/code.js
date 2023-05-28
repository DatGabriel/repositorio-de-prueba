/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
console.log(datosPersona);

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  function obtenerNombre(){
    let nombreIngresado = "";

    do {
      nombreIngresado = prompt("Ingrese su nombre: ");
    } while (nombreIngresado === null || nombreIngresado === "" || !isNaN(nombreIngresado));

    datosPersona.nombre = nombreIngresado;
  }
  obtenerNombre();

  function obtenerEdad(){
    let edadIngresada = 0;
    do {
      edadIngresada = prompt("¿Cual es su año de nacimiento?: ");
    } while (edadIngresada === null || edadIngresada === "" || isNaN(edadIngresada));
    edadIngresada = 2023 - edadIngresada;
    datosPersona.edad = edadIngresada
  }
  obtenerEdad();

  function ObtenerCiudad(){
    let ciudadIngresada ="";
    do {
      ciudadIngresada = prompt("Ingrese la ciudad donde vive")
    } while (ciudadIngresada === null || ciudadIngresada === "" || !isNaN(ciudadIngresada));

    datosPersona.ciudad = ciudadIngresada;
  }
  ObtenerCiudad();

  function interesJs(){
    let interesIngresado = confirm("¿Te interesa Javascript?")
    if (interesIngresado === true) {
      datosPersona.interesPorJs = "Si"
    } else {
      datosPersona.interesPorJs = "No";
    }
  }
  interesJs();
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

