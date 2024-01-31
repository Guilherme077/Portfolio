const windows = document.querySelectorAll('.window');

function sysTime(){
    var Data = new Date();
    var hora = Data.getHours();
    var min = Data.getMinutes();
    document.querySelector('.status-bar').innerHTML = hora + ':' + min;
}
setInterval(sysTime, 1000);
sysTime();

//MOVIMENTAÇÃO DA JANELA
windows.forEach(window => {
    let isDragging = false;
    let offsetX, offsetY;

    window.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - window.getBoundingClientRect().left;
        offsetY = e.clientY - window.getBoundingClientRect().top;
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
});