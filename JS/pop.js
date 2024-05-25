
const botton = document.getElementById('bttnEnviar');
const listaCaja = document.getElementById('cajaLista');
const cajaEntrada = document.getElementById('cajaEntrada');

botton.addEventListener('click', () => {
    const entrada = document.getElementsByName('entrada')[0];

    crearLista(entrada.value);


});

var crearLista = numero => {

    for (var i = 0; i < numero; i++) {

        var div = document.createElement('div');
        div.classList.add("nodos");
        listaCaja.appendChild(div);

        console.log("creando")
    }
    cajaEntrada.hidden = true;
    cajaLista.hidden = false;

}