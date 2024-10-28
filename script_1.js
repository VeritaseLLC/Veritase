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
