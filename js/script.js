// DUSTBUSTERS JAVASCRIPT FOR MODERN INTERACTIVITY

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // NOTE: You need to manually add a button/div with the class 'menu-toggle' 
    // to your HTML header (e.g., inside the <header> tag)
    // Example: <span class="menu-toggle">☰</span>
    const menuToggle = header.querySelector('.menu-toggle'); 

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation list
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked (useful on mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Ensure the menu only closes if the current view is mobile (menu is active)
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }

    // 2. Simple form confirmation (for contact.html)
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            // Prevent the default submission for this demo
            e.preventDefault(); 
            
            // In a real application, you would send data to a server here.
            
            alert('Thank you! Your quote request has been sent. A DustBusters representative will contact you shortly.');
            
            // Optionally clear the form
            quoteForm.reset();
        });
    }

});