document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const welcomeScreen = document.getElementById('welcome-screen');
    const moon = document.getElementById('moon');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    moon.addEventListener('click', function() {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.classList.add('fade-in'); 
        }, 1000);
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) window.requestAnimationFrame(step);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
    }

    const typedWelcome = new Typed('.typing-text1', {
        strings: ['Welcome to My Space'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });

    const typedAbout = new Typed('.typing-text2', {
        strings: ['ABOUT ME'],
        typeSpeed: 82,
        backSpeed: 84,
        backDelay: 1200,
        loop: true,
    });

    const typedContact = new Typed('.typing-text3', {
        strings: ['CONTACT ME'],
        typeSpeed: 83,
        backSpeed: 85,
        backDelay: 1200,
        loop: true,
    });

    const typedFaq = new Typed('.typing-text4', {
        strings: ['FAQ'],
        typeSpeed: 84,
        backSpeed: 86,
        backDelay: 1200,
        loop: true,
    });

    const readMoreBtn = document.getElementById('readMore');
    const expandingCard = document.getElementById('expandingCard');
    const cardIcon = document.getElementById('cardIcon');
    const previewText = document.querySelector('.preview');
    const fullContentText = document.querySelector('.full-content');
    

    readMoreBtn.addEventListener('click', function () {
        const isExpanded = expandingCard.classList.toggle('expanded');
        readMoreBtn.textContent = isExpanded ? 'Read Less' : 'Read More';

        if (isExpanded) {
            previewText.style.display = 'none';
            fullContentText.style.display = 'block';
        } else {
            previewText.style.display = 'block';
            fullContentText.style.display = 'none';
        }
    });

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    moon.addEventListener('click', function() {
        welcomeScreen.classList.add('fade-out');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.classList.add('fade-in');
            
            const targetPosition = document.getElementById('home').offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }, 1000);
    });

    
});