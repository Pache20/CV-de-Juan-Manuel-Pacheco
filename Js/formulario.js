function requerido(input) {
  //let elemento = document.getElementById("nombre");
  if (input.value != "") {
    //con value accedo a lo que esta dentro de mi input
    // cuando el input tiene texto
    input.className = "form-control is-valid";
    return true;
  } else {
    // cuando el input este vacio
    input.className = "form-control is-invalid";
    return false;
  }
}

function revisarEmail(input) {
  //juanmanuelpacheco67@gmail.com
  let expresion = /\w+@+\w+\.[a-z]/;

  if (input.value != "" && expresion.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function revisarNumeros(input) {
  if (input.value != "" && !isNaN(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function revisarConsulta(consulta) {
  if (consulta.value.length >= 10) {
    consulta.className = "form-control is-valid";
    return true;
  } else {
    consulta.className = "form-control is-invalid";
    return false;
  }
}

//agregar un evento a un objeto HTML
let checkTerminos = document.getElementById(`terminos`);
//agregar evento
checkTerminos.addEventListener(`change`, revisarTerminos);

function revisarTerminos() {
  if (checkTerminos.checked) {
    checkTerminos.className = "form-check-input is-valid";
    return true;
  } else {
    checkTerminos.className = "form-check-input is-invalid";
    return false;
  }
}

function validarGeneral(event) {
  event.preventDefault();
  console.log("Desde la funcion validar general" + event);
  if (
    requerido(document.getElementById(`nombre`)) &&
    revisarEmail(document.getElementById(`email`)) &&
    revisarNumeros(document.getElementById(`telefono`)) &&
    revisarConsulta(document.getElementById(`consulta`)) &&
    revisarTerminos()) {
    alert("El formulario esta listo para ser enviado");
  } else {
    alert(`ocurrio un error`);
  }
}

//this tiene que ver con el contexto donde lo utilizo, en el html se esta utilizando solo en el input.
//Si solo quiero mandar el id del objeto coloco (this.id)
//Expresion regular es un patron que sigue cierta estructura mayormente se usa en los email.
