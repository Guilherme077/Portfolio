//ADD: Tela de entrada, menu de login, botoes no menu iniciar, outras janelas

const windows = document.querySelectorAll('.window');
const closebtn = document.querySelectorAll('.close');
const startbtn = document.querySelector('#start-btn');
const startmenu = document.querySelector('.start-menu');
const menubtn0 = document.querySelector('#menubtn0');
const window1 = document.querySelector('#window1');
const menubtn1 = document.querySelector('#menubtn1');
const window2 = document.querySelector('#window2');
const menubtn2 = document.querySelector('#menubtn2');
const window3 = document.querySelector('#window3');
const menubtn3 = document.querySelector('#menubtn3');
const window4 = document.querySelector('#window4');
const menubtn4 = document.querySelector('#menubtn4');
const window5 = document.querySelector('#window5');
const menubtn5 = document.querySelector('#menubtn5');
const window6 = document.querySelector('#window6');
const menubtn6 = document.querySelector('#menubtn6');
var id = null;
var destaque;

//IMPEDIR MOBILE
if (screen.width < 1024 || screen.height < 768) {
    window.location = 'http://guilhermepmoreira.com';
} 


//HORA
function sysTime() {
    var Data = new Date();
    var hora = Data.getHours();
    var min = Data.getMinutes();
    var dia = Data.getDate();
    var mes = Data.getMonth();
    var ano = Data.getFullYear();
    document.querySelector('.showtime').innerHTML = dia + '/' + (mes + 1) + '/' + ano + '  ' + hora + ':' + min;
}
setInterval(sysTime, 1000);
sysTime();

startmenu.style.display = 'none'; // Certifica que o menu está fechado
window1.style.display = 'none';
window2.style.display = 'none';
window3.style.display = 'none';
window4.style.display = 'none';
window5.style.display = 'none';
window6.style.display = 'none';

//BOTAO DE FECHAR
closebtn.forEach(button => {
    button.addEventListener('click', () => {
        var controls = button.parentNode;
        var titlebar = controls.parentNode;
        var windowa = titlebar.parentNode;
        windowa.style.display = 'none';
    });
});

//BOTOES DO MENU
menubtn0.addEventListener('click', () => {
    window.location = 'http://guilhermepmoreira.com';
});
menubtn1.addEventListener('click', () => {
    if (window1.style.display == 'none') {
        window1.style.display = 'block';
        window1.style.zIndex = 6;
    }
});
menubtn2.addEventListener('click', () => {
    if (window2.style.display == 'none') {
        window2.style.display = 'block';
        window2.style.zIndex = 6;
    }
});
menubtn3.addEventListener('click', () => {
    if (window3.style.display == 'none') {
        window3.style.display = 'block';
        window3.style.zIndex = 6;
    }
});
menubtn4.addEventListener('click', () => {
    if (window4.style.display == 'none') {
        window4.style.display = 'block';
        window4.style.zIndex = 6;
    }
});
menubtn5.addEventListener('click', () => {
    if (window5.style.display == 'none') {
        window5.style.display = 'block';
        window5.style.zIndex = 6;
    }
});
menubtn6.addEventListener('click', () => {
    if (window6.style.display == 'none') {
        window6.style.display = 'block';
        window6.style.zIndex = 6;
    }
});

//BOTÂO INICIAR
startbtn.addEventListener('click', () => {
    if (startmenu.style.display == 'none') {
        startmenu.style.display = 'block';
    } else {
        startmenu.style.display = 'none';
    }

});

//MOVIMENTAÇÃO DA JANELA
windows.forEach(window => {
    let isDragging = false;
    let offsetX, offsetY;
    
        
    


    window.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - window.getBoundingClientRect().left;
        offsetY = e.clientY - window.getBoundingClientRect().top;

        destaque = window;
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = e.clientX - offsetX + 'px';
            window.style.top = e.clientY - offsetY + 'px';
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;

    });
    document.body.addEventListener('mouseup', () => {
        isDragging = false;
        
    });
    document.body.addEventListener('mousedown', () => {
        if (window == destaque) {
            window.style.zIndex = 8;
        } else {
            window.style.zIndex = 4;
        }
    });

});
