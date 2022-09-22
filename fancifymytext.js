const textArea = document.getElementById("text");

if (document.getElementById("fancy").checked) {
    makeFancy(null);
}
if (document.getElementById("boring").checked) {
    makeBoring(null);
}

document.getElementById("bigger").onclick = e => {
    textArea.style.fontSize = "4em";
};

document.getElementById("moo").onclick = moo;
document.getElementById("fancy").onchange = makeFancy
document.getElementById("boring").onchange = makeBoring;

function moo(e) {
    var str = textArea.value.toUpperCase();
    var parts = str.split(".");
    textArea.value = parts.join("-Moo");
}

function makeFancy(e) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function makeBoring(e) {
    textArea.style.fontWeight = "400";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}