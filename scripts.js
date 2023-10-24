window.addEventListener('load', () => {
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach(balloon => {
        const randomTop = Math.floor(Math.random() * 80); // Posição vertical aleatória
        const randomLeft = Math.floor(Math.random() * 80); // Posição horizontal aleatória
        
        balloon.style.top = `${randomTop}%`;
        balloon.style.left = `${randomLeft}%`;
    });
});
