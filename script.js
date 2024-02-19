let currentSlide = 1;

document.getElementById('interactiveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('fullName').value;
    const dobMonth = document.getElementById('month').value;
    const dobDay = document.getElementById('day').value;
    const dobYear = document.getElementById('year').value;

    const formData = {
        fullName: fullName,
        dateOfBirth: `${dobMonth}/${dobDay}/${dobYear}`
    };

    sendDataToMake(formData);
});

function sendDataToMake(formData) {
    // Replace 'YOUR_MAKE_WEBHOOK_URL' with the actual URL provided by Make
    fetch('https://hook.us1.make.com/smu3wb30yhd6uioh7ow3sa4modnkpw16', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle any follow-up actions after sending data to Make
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

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
