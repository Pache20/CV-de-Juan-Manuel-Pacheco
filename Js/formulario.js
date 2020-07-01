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
    revisarTerminos()
  ) {
    enviarEmail();
  } else {
    document.getElementById(`msjEnviar`).className = `alert alert-primary my-4`;
    document.getElementById(
      `msjEnviar`
    ).innerText = `Ocurrio un error en el envio`;
  }
}

function enviarEmail() {
  let template_params = {
    from_name: document.getElementById(`nombre`).value,
    to_name: "Juan Manuel Pacheco",
    message_html: `telefono: ${
      document.getElementById(`telefono`).value
    } - Email: ${document.getElementById(`email`).value} - Consulta: ${
      document.getElementById(`consulta`).value
    }`,
  };

  let service_id = "default_service";
  let template_id = "template_cuEimDdw";
  emailjs.send(service_id, template_id, template_params).then(
    function (response) {
      //esto se ejecuta si el email se envio correctamente
      console.log(response);
      document.getElementById(
        `msjEnviar`
      ).className = `alert alert-primary my-4`;
      document.getElementById(
        `msjEnviar`
      ).innerText = `Su consulta fue enviada`;
    },
    function (error) {
      document.getElementById(
        `msjEnviar`
      ).className = `alert alert-primary my-4`;
      document.getElementById(
        `msjEnviar`
      ).innerText = `Ocurrio un error en el envio`;
      console.log("error", error);
    }
  );
}
