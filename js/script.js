// Burger Menü Logik zur Steuerung der mobilen Navigation
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Schließt das Menü automatisch, wenn ein Navigationslink geklickt wird
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Akkordeon Logik für die interaktiven Beratungsschwerpunkte
document.querySelectorAll('.accordion-header').forEach(header => {
    header.onclick = function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');

        // Schließt alle anderen geöffneten Elemente, um den Fokus zu bewahren
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Öffnet das gewählte Element nur, wenn es nicht bereits aktiv war
        if (!isActive) {
            item.classList.add('active');
        }
    };
});
