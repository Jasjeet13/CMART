document.getElementById("product-image").addEventListener("change", function() {
    var preview = document.getElementById("preview-image");
    var file = this.files[0];
    
    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.add("show"); // Show the uploaded image
        };

        reader.readAsDataURL(file);
    }
});