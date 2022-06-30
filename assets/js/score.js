$(document).ready(function() {
    let users = [];
    let userScores = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== undefined) {
            users.push(localStorage.key(i));
            userScores.push(localStorage.getItem(users[i]));
            $("<li>").text(users[i] + " " + userScores[i]).appendTo("#highscores");
        }
    }
});

$("#clear-score").click(function() {
    localStorage.clear();
    location.reload();
});