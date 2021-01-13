document.querySelector('#dolar').addEventListener('click', function () {
  obtenerDatos('dolar');
});

document.querySelector('#euro').addEventListener('click', function () {
  obtenerDatos('euro');
});

document.querySelector('#bitcoin').addEventListener('click', function () {
  obtenerDatos('bitcoin');
});

document.querySelector('#boton-clean').addEventListener('click', limpiarDatos);

function obtenerDatos(valor) {
  let url = `https://mindicador.cl/api/${valor}`;

  const primeraLetraMayuscula = (cadena) =>
    cadena.charAt(0).toUpperCase().concat(cadena.substring(1, cadena.length));

  let title = document.querySelector('#title');

  title.innerHTML = `
  ${primeraLetraMayuscula(valor)} representado en pesos chilenos`;

  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      console.log(datos.serie);
      let resultado = document.querySelector('#resultado');
      resultado.innerHTML = '';

      let i = 0;

      for (let item of datos.serie) {
        // console.log(item.fecha);
        i++;
        resultado.innerHTML += `
        <tr>
          <td>$${item.valor}</td>
          <td>${item.fecha.substring(0, 10)}</td>
        </tr>`;
        if (i > 10) {
          break;
        }
      }
    }
  };
}

function limpiarDatos() {
  let resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
}
