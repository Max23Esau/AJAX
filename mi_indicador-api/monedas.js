document.querySelector('#dolar').addEventListener('click', function () {
  obtenerDatos('dolar');
});
document.querySelector('#uf').addEventListener('click', function () {
  obtenerDatos('uf');
});
document.querySelector('#boton-clean').addEventListener('click', limpiarDatos);

function obtenerDatos(valor) {
  let url = `https://mindicador.cl/api/${valor}`;

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
        <li>
        $ ${item.valor} - ${item.fecha.substring(0, 10)}
        </li>
        `;
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
