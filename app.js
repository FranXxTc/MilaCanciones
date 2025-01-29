document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            src: "assets/Billie-happier.png",
            backgroundColor: "#fac16c", // Color de fondo para esta imagen
            text: "Hoy es un día para liberarte de las cargas emocionales, reflexionar sobre tus relaciones y reconectar contigo mismo, dejando atrás el dolor con fuerza y empoderamiento.", // Billie Happy
            link: "https://www.youtube.com/watch?v=5GJWxDKyk3A"
        },
        {
            src: "assets/Billie-angry.jpeg", // Imagen para el estado Angry
            backgroundColor: "#a01818", // Otro color para esta imagen
            text: "Hoy es el día para liberar toda esa rabia acumulada. Tómate un momento para procesar lo que sientes y hacer algo poderoso con tu enojo.", // Billie Angry
            link: "https://www.youtube.com/watch?v=-tn2S3kJlyU"
        },
        {
            src: "assets/Billie-sad.png", // Imagen para el estado Sad
            backgroundColor: "#ffffff", // Otro color para esta imagen
            text: "La tristeza es solo una emoción temporal. Permítete sentir, pero recuerda que siempre hay espacio para la esperanza y la renovación.", // Billie Sad
            link: "https://www.youtube.com/watch?v=WiinVuzh4DA"
        },
        {
            src: "assets/Billie-calm.jpeg", // Imagen para el estado Calm
            backgroundColor: "#2a4c80", // Otro color para esta imagen
            text: "Es hora de relajarte y dejar que la paz te rodee. Respira hondo, suelta lo que te pesa y disfruta de la serenidad.", // Billie Calm
            link: "https://www.youtube.com/watch?v=BY_XwvKogC8"
        },
    ];

    let currentIndex = 0;
    const carouselImage = document.getElementById("carouselImage");
    const carouselText = document.querySelector(".principalParrafo2"); // Asegúrate de que esté apuntando al p correcto
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateCarousel() {
        // Cambiar imagen
        carouselImage.src = images[currentIndex].src;

        //cambiar el link
        carouselImage.parentElement.href = images[currentIndex].link;

        // Cambiar el color de fondo del body
        document.body.style.backgroundColor = images[currentIndex].backgroundColor;

        // Cambiar el texto del p
        carouselText.textContent = images[currentIndex].text;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Inicializa el carrusel al cargar la página
    updateCarousel();
});
