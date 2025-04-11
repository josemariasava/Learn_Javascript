let homeScore = 0;
let guestScore = 0;

const homeText = document.getElementById("score_home");
const guestText = document.getElementById("score_guest");

// Get all buttons with the class 'btn_score'
const buttons = document.querySelectorAll(".btn_score");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const team = this.getAttribute("data-team");
        const points = parseInt(this.getAttribute("data-points"));

        if (team === "home") {
            homeScore += points;
            homeText.textContent = homeScore;
        } else if (team === "guest") {
            guestScore += points;
            guestText.textContent = guestScore;
        }
    });
});

// Manage reset button 
const reset = document.getElementById("resetBtn");

reset.addEventListener("click", function () {

    homeScore = 0
    homeText.textContent = homeScore

    guestScore = 0
    guestText.textContent = guestScore
});

