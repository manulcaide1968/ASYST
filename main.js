
function selectMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('inputSection').style.display = 'block';
    document.getElementById('inputTitle').textContent = `Introduce ${mode} números (1-49)`;
    const grid = document.getElementById('numberGrid');
    grid.innerHTML = '';
    inputs = [];
    for (let i = 0; i < mode; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.min = 1;
        input.max = 49;
        input.className = 'num-input';
        input.placeholder = '-';
        input.inputMode = 'numeric';
        input.pattern = '[0-9]*';
        input.addEventListener('input', function(e) {
            let val = parseInt(e.target.value);
            if (val > 49) e.target.value = 49;
            if (val < 1 && e.target.value !== '') e.target.value = 1;
        });
        grid.appendChild(input);
        inputs.push(input);
    }
}
