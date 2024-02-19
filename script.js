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
    return true;
}

// Initialize first slide as active
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slide1').classList.add('active');
});
