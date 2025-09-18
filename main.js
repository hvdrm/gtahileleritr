const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Basit sayfa geçiş efekti (fade)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if(href.startsWith('http') || href.startsWith('#')) return;
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => { window.location = href; }, 300);
    });
});
