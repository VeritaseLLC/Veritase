window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('sub-icon').addEventListener('click', function() {
    const message = document.getElementById('text-box').value.trim(); 
    const email= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (message === "") {
        alert("Please enter the Email Id.");
    } else {
        if (email.test(message)) {
            alert("PDF sent successfully to your mail ID.");
            document.getElementById('text-box').value = ''; 
        } else {
            alert('Please enter a valid email address.');
        }
    }
});


document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobileno = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (name === '' || email === '' || mobileno === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileno)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

   
    alert('Submitted successfully!');

    // document.getElementById('contact_form').reset();

});
