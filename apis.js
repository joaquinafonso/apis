document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            // Procesa los datos recibidos de la API (puedes mostrar una imagen de gato)
            const imageUrl = data[0].url;
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            document.getElementById("resultado").appendChild(imageElement);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});