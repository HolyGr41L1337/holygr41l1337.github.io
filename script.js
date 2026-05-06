function showMessage(event) {
    event.preventDefault();

    let userName = document.querySelector("#name").value;
    let result = document.querySelector("#result");

    if (userName == "") {
        result.innerHTML = "Please type your name first.";
    } else {
        result.innerHTML = "Hi " + userName + ", thank you for filling out the AI survey!";
    }
}

function showTip() {
    let tip = document.querySelector("#tip");
    tip.innerHTML = "AI tip: Ask clear questions, check the answer, and keep your own thinking.";
}

function clearResult() {
    document.querySelector("#result").innerHTML = "Your result will show here.";
    document.querySelector("#tip").innerHTML = "";
}

document.querySelector("#aiForm").addEventListener("submit", showMessage);
document.querySelector("#name").addEventListener("change", function() {
    document.querySelector("#result").innerHTML = "You typed your name. Now you can submit the form.";
});
