





// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Python developer", "Backend developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Section highlighting on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove 'active' class from all links
                link.className = link.className.replace(' active', '');

                // Add 'active' class to the current link if it exists
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.className += ' active';
                } else {
                    console.log(`No matching link found for section id: ${id}`);
                }
            });
        }
    });
};
