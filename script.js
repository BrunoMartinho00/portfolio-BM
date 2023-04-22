const darkModeButton = document.querySelector('#darkModeBTN');

function loadStyle() {
    const darkModeStat = localStorage.getItem("darkModeStat");
    console.log("Darkmode: " + darkModeStat);

    if (darkModeStat == null) {
        localStorage.setItem("darkModeStat", 0);
    } else {
        if (darkModeStat == 1) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }
}

function setDarkMode() {
    document.getElementById("stylesheet").href = "style-dark.css";
    document.getElementById("darkModeBTN").textContent="dark_mode";
    var vid = document.getElementById("myVideo");
    vid.src = "source/10mb preto.mp4";
}

function setLightMode() {
    document.getElementById("stylesheet").href = "style-light.css";
    document.getElementById("darkModeBTN").textContent="light_mode";
    var vid = document.getElementById("myVideo");
    vid.src = "source/10mb branco.mp4";
}

darkModeButton.addEventListener('click', function () {
    const darkModeStat = localStorage.getItem("darkModeStat");

    if (darkModeStat == true) {
        localStorage.setItem("darkModeStat", 0);
        setLightMode();
    } else {
        localStorage.setItem("darkModeStat", 1);
        setDarkMode();
    }
});