
let display = document.getElementById("display");
let themeToggleIcon = document.getElementById("themeToggleIcon");

function adicionarValor(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}

themeToggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    updateTheme();
});

function updateTheme() {
    if (document.body.classList.contains('light')) {
        document.documentElement.style.setProperty('--calc-bg-color', '#fff');
        document.documentElement.style.setProperty('--display-bg-color', '#f0f0f0');
        document.documentElement.style.setProperty('--display-color', '#000');
        document.documentElement.style.setProperty('--button-bg-color', '#e0e0e0');
        document.documentElement.style.setProperty('--button-color', '#000');
        document.documentElement.style.setProperty('--button-hover-bg-color', '#d0d0d0');
        document.documentElement.style.setProperty('--button-active-bg-color', '#c0c0c0');
        document.documentElement.style.setProperty('--special-btn-bg-color', '#00bcd4');
        document.documentElement.style.setProperty('--special-btn-hover-bg-color', '#0097a7');
        themeToggleIcon.textContent = '🌞';
    } else {
        document.documentElement.style.setProperty('--calc-bg-color', '#333');
        document.documentElement.style.setProperty('--display-bg-color', '#000');
        document.documentElement.style.setProperty('--display-color', '#fff');
        document.documentElement.style.setProperty('--button-bg-color', '#444');
        document.documentElement.style.setProperty('--button-color', '#fff');
        document.documentElement.style.setProperty('--button-hover-bg-color', '#555');
        document.documentElement.style.setProperty('--button-active-bg-color', '#777');
        document.documentElement.style.setProperty('--special-btn-bg-color', '#ff9800');
        document.documentElement.style.setProperty('--special-btn-hover-bg-color', '#e68900');
        themeToggleIcon.textContent = '🌙';
    }
}

document.body.classList.add('dark');
updateTheme();
