// Get all image elements
const images = document.getElementsByTagName('img');
        
// Loop through the images and add event listener
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        // Toggle fullscreen class on click
        if (this.classList.contains('fullscreen')) {
            this.classList.remove('fullscreen');
            document.body.style.overflow = "auto"; // Re-enable scrolling
        } else {
            this.classList.add('fullscreen');
            document.body.style.overflow = "auto"; // Disable scrolling
        }
    });
}