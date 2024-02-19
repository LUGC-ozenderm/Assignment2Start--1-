// Define student ID and array of images
const studentId = '20089820';
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// Event listener for custom color button
document.getElementById('btnCustomColor').addEventListener('click', function() {
    const input = document.getElementById('inputColor').value; // Get input color value
    changeColor(input); // Change background color
    document.getElementById('studentId').innerText = studentId; // Display student ID
});

// Event listener for random color button
document.getElementById('btnRandomColor').addEventListener('click', function() {
    const random = Math.floor(Math.random() * 101); // Generate random number
    changeColor(random); // Change background color
});

// Event listener for image selection
document.getElementById('imageSelect').addEventListener('click', function() {
    const select = document.getElementById('imageSelect');
    select.innerHTML = ''; // Clear image selection options

    // Create default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Please select an image';
    select.appendChild(defaultOption);

    // Populate image selection options
    images.forEach(function(image, index) {
        const option = document.createElement('option');
        option.value = index;
        option.text = image;
        select.appendChild(option);
    });
});

// Event listener for image change
document.getElementById('imageSelect').addEventListener('change', function() {
    const selected = document.getElementById('imageSelect').value; // Get selected image index
    document.getElementById('displayImage').src = 'img/' + images[selected]; // Display selected image
});

// Function to change background color based on input value
function changeColor(input) {
    let color;
    if (input < 0 || input > 100) color = 'red';
    else if (input <= 20) color = 'green';
    else if (input <= 40) color = 'blue';
    else if (input <= 60) color = 'orange';
    else if (input <= 80) color = 'purple';
    else color = 'yellow';
    document.body.style.backgroundColor = color; // Change background color
}
