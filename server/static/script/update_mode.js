//get references to necessary elements
const emojiRadio = document.getElementById("emoji");
const textRadio = document.getElementById("text");
const inputLabel = document.querySelector("label[for='translation-input']");
const inputField = document.getElementById("translation-input");
const outputLabel = document.getElementById("output-label");
const outputField = document.getElementById("translation-output");

//mode swtiching function
/*
Note: it's not implemented yet, but we will need to swap which API call
is made - this will probably be done in the function making the API call
(can just check the emoji / text radio element) but worth noting
*/
function updateMode() {
    if (emojiRadio.checked) { //translating from emoji
        //update labels
        inputLabel.innerHTML = "Enter emojis to translate";
        outputLabel.innerHTML = "The text is...";
        //swap placeholders
        inputField.placeholder = "😂🐱";
        outputField.innerHTML = "Happy Cat";
    }
    else { //translating from text
        //update labels
        inputLabel.innerHTML = "Enter text to translate";
        outputLabel.innerHTML = "The emojis are..."; //plural? mayyybe add logic to use correct grammar
        //swap placeholders
        inputField.placeholder = "Happy Cat";
        outputField.innerHTML = "😂🐱";
    }
}

//add listeners to radio elements
emojiRadio.addEventListener("change", updateMode);
textRadio.addEventListener("change", updateMode);