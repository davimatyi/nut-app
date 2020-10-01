const ipcRenderer = window.ipcRenderer;

document.addEventListener('load', () => {
    if(window.os === 'darwin') {
        document.querySelector('.title-bar').hidden = true;
    }
});

document.querySelector('.ui-btn.close').addEventListener('click', () => {
    console.log("close");
    ipcRenderer.send('close-window');
});

document.querySelector('.ui-btn.minimize').addEventListener('click', () => {
    console.log("minimize");
    ipcRenderer.send('minimize-window');
});