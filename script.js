// Variable para guardar el estado del mouse
let mouseX = 0;
let mouseY = 0;

// Obtiene los elementos del DOM
const digitalBackground = document.querySelector('.digital-background');
const width = window.innerWidth;
const height = window.innerHeight;

// Escucha el movimiento del mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Función para inicializar los fragmentos flotantes
function initFloatingSnippets() {
  const snippets = document.querySelectorAll('.floating-snippet');
  snippets.forEach(snippet => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const duration = 10 + Math.random() * 10;
    snippet.style.left = `${x}px`;
    snippet.style.top = `${y}px`;
    snippet.style.animationDuration = `${duration}s`;
  });
}

// Función para inicializar el efecto de tipeo
function initTypingEffects() {
  document.querySelectorAll('.typing-text').forEach(el => {
    const text = el.getAttribute('data-text');
    let index = 0;

    function type() {
      if (index < text.length) {
        el.textContent += text[index];
        index++;
        setTimeout(type, 80 + Math.random() * 50);
      }
    }
    type();
  });
}

// Función para crear un resplandor central
function createGlow() {
  const glow = document.createElement('div');
  glow.classList.add('code-glow');
  digitalBackground.appendChild(glow);
}

// Función para generar grietas aleatorias
function createRandomCrack() {
  const crack = document.createElement('div');
  crack.classList.add('crack-line');
  const x = Math.random() * width;
  const y = Math.random() * height;
  const rotation = Math.random() * 360;

  crack.style.top = `${y}px`;
  crack.style.left = `${x}px`;
  crack.style.transform = `rotate(${rotation}deg)`;
  digitalBackground.appendChild(crack);

  // Genera fragmentos de código en la grieta
  const numFragments = 5 + Math.random() * 5;
  for (let i = 0; i < numFragments; i++) {
    const codeFragment = document.createElement('div');
    codeFragment.classList.add('code-fragment');
    const characters = '0123456789ABCDEF';
    let code = '';
    for (let j = 0; j < 5; j++) {
      code += characters[Math.floor(Math.random() * characters.length)];
    }
    codeFragment.textContent = code;
    codeFragment.style.top = `${Math.random() * 20}px`;
    codeFragment.style.left = `${Math.random() * 100}px`;
    codeFragment.style.animationDelay = `${i * 0.1}s`;
    crack.appendChild(codeFragment);
  }

  // Elimina la grieta después de un tiempo
  setTimeout(() => {
    crack.remove();
  }, 5000);
}

// Inicializa todas las funciones
window.onload = () => {
  initFloatingSnippets();
  initTypingEffects();
  createGlow();
  setInterval(createRandomCrack, 1000); // Crea una nueva grieta cada segundo
};