window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        
            var name = document.getElementById('name').value
            var email = document.getElementById('email').value
            var message = document.getElementById('message').value
        
        emailjs.sendForm('service_hi6jzto', 'template_odwkvhj', '#contact-form')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                console.log(name)
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

//EmailJS Password: Test@123
const navSide = () =>{
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
    })
    navLinks.forEach((link, index)=>{
        link.style.animation = `navlinksFade 0.7s ease forwards ${index/ 7 + 1}s`
    })
    
}
navSide()

