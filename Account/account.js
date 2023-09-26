document.addEventListener("DOMContentLoaded", function () {
    const profilePictureInput = document.getElementById("profilePicture");
    const profilePreview = document.getElementById("profilePreview");

    profilePictureInput.addEventListener("change", function () {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                profilePreview.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    });

    const profileForm = document.getElementById("profileForm");

    profileForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const file = profilePictureInput.files[0];

        if (file) {
            // You can use AJAX or fetch to send the file to your server for processing.
            // Here's a simple example using fetch:

            const formData = new FormData();
            formData.append("profilePicture", file);

            fetch("http://localhost:3000/upload-profile-picture", {
                method: "POST",
                body: formData,
            })
            .then(response => {
                // Handle the server response here
                console.log(response);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
        }
    });
});
