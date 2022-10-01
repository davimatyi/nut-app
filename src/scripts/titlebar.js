const ipcRenderer = window.electron.ipcRenderer;

window.addEventListener('load', () => {
    if(window.electron.os === 'darwin') {
        console.log('macOS detected');
        document.querySelector('.title-bar').style.display = 'none';
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