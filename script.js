document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide1').classList.add('active');
    const form = document.getElementById('interactiveForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the actual form submission

        // Get the values from the input fields
        const fullName = document.getElementById('fullName').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const year = document.getElementById('year').value;
        const dateOfBirth = month + '/' + day + '/' + year;

        // Log the results to the console or do something else with them
        console.log('Full Name:', fullName);
        console.log('Date of Birth:', dateOfBirth);

        // Here you might want to send the data to a server or perform some other action
        // For example, you can redirect to another page or display a thank you message
        // window.location.href = 'thankyou.html'; // Redirect to a thank you page

        // Or you can display a message on the page
        // document.getElementById('formContainer').innerHTML = '<p>Thank you for submitting your information!</p>';
    });
});

function nextSlide(slideNumber) {
    let current = document.getElementById('slide' + currentSlide);
    let next = document.getElementById('slide' + slideNumber);
    
    if (validateSlide(currentSlide)) {
        current.classList.remove('active');
        next.classList.add('active');
        currentSlide = slideNumber;
    } else {
        alert('Please fill all required fields.');
    }
}

function validateSlide(slideNumber) {
    // Add validation logic here based on slideNumber if needed
    // Simple example for slide 1:
    if (slideNumber === 1) {
        const fullName = document.getElementById('fullName').value;
        return fullName.trim() !== '';
    }
    // Assume slide 2 is valid for simplicity, add actual validation as needed
    return true;
}

let currentSlide = 1;

document.getElementById('interactiveForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (currentSlide < 2) {
            nextSlide(currentSlide + 1);
        } else {
            this.submit();
        }
    }
});
