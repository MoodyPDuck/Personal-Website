document.addEventListener("DOMContentLoaded", function() {
    const aboutMeImg = document.getElementById("about-me-img");

    //Allows for the picture to have a fade-in class to the image to increase opacity
    aboutMeImg.classList.add("fade-in");

    //Allows for the dark mode function
    document.getElementById("toggleDarkMode").onclick = function(){
        document.getElementsByTagName("body")[0].classList.toggle("dark");
    };
});