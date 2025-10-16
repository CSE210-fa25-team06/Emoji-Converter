/*
This script assumes the existence of several variables present in update_mode.js: 
emojiRadio, textRadio, inputField and outputField
As such, it should be instantiated after update_mode.js in the HTML
*/
/* global inputField, emojiRadio, textRadio, outputField */

//get reference to translate button
const translateButton = document.getElementById("translate-button");

//define translation logic (API calls)
async function translate() {
    const input = inputField.value;
    let response;
    if (emojiRadio.checked) { //from emoji to text
        response = await fetch("http://localhost:5000/convertToText", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({text: input})
        });
    }
    else { //from text to emoji
        response = await fetch ("http://localhost:5000/convertToEmojis", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({phrase: input})
        });
    }

    const result = await response.json();
 
    //get converted text if converting from emoji, converted emoji if otherwise
    if (emojiRadio.checked && result.converted_text){
        outputField.textContent = result.converted_text;
    }
    else if (textRadio.checked && result.converted_emojis){
        outputField.textContent = result.converted_emojis;
    }
    else {
        outputField.textContent = result.error;
    }
}

//add listener to wait for click
translateButton.addEventListener("click", translate);