/*################### Hamburger-Menü ##################*/
const hamMenu = document.querySelector('.ham-menu');

const offscreenMenu = document.querySelector('.offscreen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
})


/*#################### Timer ##########################*/

let timer;
let zeit = 25 * 60; // Startzeit (25 Minuten)
let ursprünglicheZeit = zeit; // Speichert die ursprüngliche Zeit

// Timer anzeigen
function updateAnzeige() {
    const minuten = Math.floor(zeit / 60);
    const sekunden = zeit % 60;
    document.getElementById("timer-display").textContent =
        `${minuten.toString().padStart(2, '0')}:${sekunden.toString().padStart(2, '0')}`;
}

// Startet den Timer
function startTimer() {
    stopTimer(); //Timer stoppen
    timer = setInterval(() => {
        if (zeit > 0) {
            zeit--;
            updateAnzeige();
        } else {
            clearInterval(timer);
            alert("Timer fertig!");
            zeit = ursprünglicheZeit; // Zurück zur ursprünglichen Zeit
            updateAnzeige();
        }
    }, 1000);
}

// Stoppt den Timer
function stopTimer() {
    clearInterval(timer);
}

// Setzt den Timer zurück auf die ursprüngliche Zeit
function resetTimer() {
    stopTimer(); // Timer stoppen
    zeit = ursprünglicheZeit; // Zurücksetzen auf die ursprüngliche Zeit
    updateAnzeige(); // Anzeige aktualisieren
}

// Erlaubt das Setzen der Pomodoro-Zeit
function setTime() {
    const neueZeit = parseInt(document.getElementById("time-input").value);
    if (neueZeit >= 1 && neueZeit <= 60) {
        ursprünglicheZeit = neueZeit * 60; // Zeit anpassen
        zeit = ursprünglicheZeit; // Aktualisierte Zeit setzen
        updateAnzeige(); // Anzeige aktualisieren
    } else {
        alert("Bitte gib eine Zeit zwischen 1 und 60 Minuten ein.");
    }
}

// Anzeige initial setzen
updateAnzeige();

// Logout-Funktion
function logout() {
    alert("Du wurdest ausgeloggt.");
    window.location.href = "index.html"; // zurück zur Login-Seite
}


