// console.log('ok');
document.querySelector('#boton').addEventListener('click', traerDatos);
document.querySelector('#boton-clean').addEventListener('click', limpiarDatos);

function limpiarDatos() {
  let respuesta = document.querySelector('#respuesta');
  respuesta.innerHTML = '';
}

function traerDatos() {
  // console.log('Dentro de la funcion');

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'data.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);

      let datos = JSON.parse(this.responseText);
      // console.log(datos);
      let respuesta = document.querySelector('#respuesta');
      respuesta.innerHTML = '';

      for (let item of datos) {
        // console.log(item.artista);
        respuesta.innerHTML += `
        <tr>
          <td>${item.titulo}</td>
          <td>${item.artista}</td>
          <td>${item.pais}</td>
          <td>${item.compañia}</td>
          <td>${item.precio}</td>
          <td>${item.año}</td>
        </tr>
        `;
      }
    }
  };
}
