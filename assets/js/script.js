let i = 0;

$(document).ready(function() {
    let timeLeft = 100;

    loadQuestion();

    let timer = setInterval(function() {
        timeLeft--;

        choiceEval();

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
    }, 1000);
});

function loadQuestion() {
    $("#questions-title").text(questions[i].title);

    for (let j = 0; j < questions[i].choices.length; j++) {
        $("<button>").addClass("mx-auto btn btn-sm btn-dark d-block mb-3").text(questions[i].choices[j]).appendTo("#user-choices");
    }
}

function reloadQuestion() {
    $("#questions-title").text("");
    $("button").remove();
    loadQuestion();
}

function choiceEval() {
    $("button").on("click", function() {
        $(this).addClass("clicked");
    });
    if ($(".clicked").text() === questions[i].answer) {
        i++;
        reloadQuestion();
    } else {
        $("button").removeClass("clicked");
    }
}