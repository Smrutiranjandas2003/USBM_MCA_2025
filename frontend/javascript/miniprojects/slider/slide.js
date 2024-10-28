const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg' // Add more image paths as needed
];

let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');

const changeImage = () => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    sliderImage.style.opacity = 0; // Fade out

    setTimeout(() => {
        sliderImage.src = images[currentIndex]; // Change the image
        sliderImage.style.opacity = 1; // Fade in
    }, 1000); // Match this time with CSS transition duration
};

// Start the automatic image slider
setInterval(changeImage, 3000); // Change image every 3 seconds
