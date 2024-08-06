
document.getElementById('image').addEventListener('change', function (event) {
    const imagePreview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        var preloader = document.getElementById('preloader');
        var content = document.getElementById('content');
        
        // Simulate a delay (e.g., 3 seconds)
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 3000); // Delay time in milliseconds
    }
});


