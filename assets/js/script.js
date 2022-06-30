let i = 0;
let timeLeft = 100;

loadQuestion();


let timer = setInterval(function() {
    timeLeft--;

    choiceEval();

    $("#time-interval").text(timeLeft);
    if (timeLeft < 0) {
        timeLeft = 0;
        clearInterval(timer);
        $("#time-interval").text("");
        $("#questions").addClass("d-none");
        $("#scoreboard").removeClass("d-none");
    } else if (i === (questions.length - 1)) {
        clearInterval(timer);
        alert(
            "You answered all of them! Great Job"
        );
        clearPrompt();
        $("#time-interval").text("");
        $("#questions").addClass("d-none");
        $("#scoreboard").removeClass("d-none");
    }
    
}, 50);

function loadQuestion() {
    $("#questions-title").text(questions[i].title);

    for (let j = 0; j < questions[i].choices.length; j++) {
        $("<button>").addClass("mx-auto btn btn-sm btn-dark d-block mb-3").text(questions[i].choices[j]).appendTo("#user-choices");
    }
}

function reloadQuestion() {
    $("#questions-title").text("");
    $("#user-choices").children().remove();
    loadQuestion();
}

function choiceEval() {
    $("#user-choices").children().on("click", function() {
        $(this).addClass("clicked");
        clearPrompt();
    });
    if ($("button").hasClass("clicked") && ($(".clicked").text() === questions[i].answer)) {
        i++;
        correctPrompt();
        reloadQuestion();
    } else if ($("button").hasClass("clicked") && ($(".clicked").text() !== questions[i].answer)) {
        $("button").removeClass("clicked");
        incorrectPrompt();
        timeLeft -= 10;
    }
}

function correctPrompt() {
    $("#correct-prompt").removeClass("d-none");
    $("#incorrect-prompt").addClass("d-none");
}

function incorrectPrompt() {
    $("#incorrect-prompt").removeClass("d-none");
    $("#correct-prompt").addClass("d-none");
}

function clearPrompt() {
    $("#correct-prompt").addClass("d-none");
    $("#incorrect-prompt").addClass("d-none");
}


$("#submit").on("click", function(e) {
    e.preventDefault();
    let user = $(".form-control").val();

    localStorage.setItem(user, JSON.stringify(timeLeft));

    $("#submit").addClass("d-none");
    $("#nav-button").removeClass("d-none");
})

$("#submit").on("submit", function(e) {
    e.preventDefault();
    let user = $(".form-control").val();

    localStorage.setItem(user, JSON.stringify(timeLeft));

    $("#submit").addClass("d-none");
    $("#nav-button").removeClass("d-none");
})