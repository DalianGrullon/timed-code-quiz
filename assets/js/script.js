$(document).ready(function() {
    let timeLeft = 100;
    
    let timer = setInterval(function() {
        timeLeft--;
        $("#time-interval").text(timeLeft);

        if (timeLeft < 0) {
            clearInterval(timer);
            alert(
                "Out of Time! Great job."
            );
            $("#time-interval").text("");
            $("#questions").addClass("d-none");
            $("#scoreboard").removeClass("d-none");
        }

    }, 100);
});