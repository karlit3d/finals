document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Function to handle click event on navigation links
    function handleClick(event) {
        event.preventDefault(); 
        let targetId = event.target.getAttribute('href'); 
        let targetSection = document.querySelector(targetId); 
        let targetOffset = targetSection.offsetTop - 50 - 100; 
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' 
        });
    }

 
    navLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });

    // Function to highlight active navigation link based on scroll position
    function highlightNavLink() {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 550;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            }
        });
    }

   
    window.addEventListener('scroll', highlightNavLink);

    
    highlightNavLink();
});

