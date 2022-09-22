/* Name: Ethan Trinh
*  Course: CSC 196W
*  Assignment 4
*/
const textArea = document.getElementById("text");

// If the fancy radio box is checked, then style the text in the text area
if (document.getElementById("fancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// When the bigger button is pressed, increase font size of the text area
document.getElementById("bigger").onclick = e => {
    textArea.style.fontSize = "4em";
};

document.getElementById("moo").onclick = moo;
document.getElementById("fancy").onchange = makeFancy
document.getElementById("boring").onchange = makeBoring;

// Changes all text in the textarea to uppercase and make sentences end with -Moo
function moo(e) {
    var str = textArea.value.toUpperCase();
    var parts = str.split(".");
    textArea.value = parts.join("-Moo");
}


// Adds styling to the textarea
function makeFancy(e) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

// Changes styling for the textarea to normal
function makeBoring(e) {
    textArea.style.fontWeight = "400";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}