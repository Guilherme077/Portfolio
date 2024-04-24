document.addEventListener('DOMContentLoaded', (event) => {
var txtDF = document.querySelector('#diaFeriado');
var txtDJF = document.querySelector('#diaJulFerias');
var txtDFF = document.querySelector('#diaFerias');
var txtHoje = document.querySelector('#hoje');
var txtCopyright = document.querySelector('#copyright')

const dataF = new Date("2024-05-01T00:00:00"); // Feriado
const dataJF = new Date("2024-07-13T00:00:00"); // Jul Ferias
const dataFF = new Date("2024-12-07T00:00:00"); // Ferias Finais

function atualizarContagem(data, elementoD) {
    const dataAtual = new Date(); //Obtem o dia atual
    const diferencaTempo = data - dataAtual; // Obtem a diferença entre as datas

    const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24)); //a diferença é dividida por milisegundos, segundos, minutos e horas para se obter o dia

    elementoD.innerText = (dias + 1).toString();
    txtHoje.innerText = dataAtual.toString();
}

function updateAll() {
    atualizarContagem(dataF, txtDF);
    atualizarContagem(dataJF, txtDJF);
    atualizarContagem(dataFF, txtDFF);
}

function easterEgg(){
    window.alert('Que isso filho?');
}

updateAll();
txtCopyright.addEventListener('click', easterEgg);


// Atualize a contagem a cada segundo
setInterval(updateAll, 1000);

});
