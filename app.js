document.getElementById('dropZone').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('convertBtn').addEventListener('click', () => {
    const status = document.getElementById('status');
    status.style.display = 'block';
    status.textContent = 'Initializing Python/PHP client backend emulation...\n';
    
    setTimeout(() => {
        status.textContent += 'Parsing modern Info.plist architecture...\n';
    }, 800);
    
    setTimeout(() => {
        status.textContent += 'Downgrading minimum OS requirements to iPhoneOS 2.0...\n';
    }, 1600);

    setTimeout(() => {
        status.textContent += 'Success! Standard payload structured for legacy deployment.\n[Simulation Only]';
    }, 2400);
});