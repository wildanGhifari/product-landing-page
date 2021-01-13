const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click', () =>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }

            // if(link.addEventListener('click', ()=>{
            //     nav.classList.toggle('nav-close');
            //     if(nav.classList.toggle('nav-close')) {
            //         nav.classList.toggle('nav-active')
            //     }
            //     nav.classList.toggle('nav-active');

            //     // Burger Animation
            //     burger.classList.toggle('toggle');
                
            // }));
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();