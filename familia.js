// JavaScript Interativo
  const messages = [
    "Família: onde a vida começa e o amor nunca termina!",
    "Nossa força está na união!",
    "Vocês são minha maior bênção!",
    "Juntos somos invencíveis!",
    "Minha casa é onde minha família está!"
];

function showLove() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
}

function changeTheme() {
    const colors = ['#ff9a9e', '#a1c4fd', '#84fab0', '#f6d365'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}

function startFireworks() {
    const duration = 5 * 1000; // 5 segundos
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Efeito hover nas fotos
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
    });
});
function playMusic() {
    const audio = document.getElementById("bgMusic");
    
    // Tenta tocar o áudio e captura erros
    audio.play().catch(error => {
        alert("Clique em 'OK' para ativar o som! 🎧");
        audio.play(); // Segunda tentativa após interação
    });
}
