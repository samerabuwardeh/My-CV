const text = "Samer Abu Wardeh";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        const displayed = text.slice(0, index + 1);
        document.getElementById("text").innerHTML =
            displayed + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    } else {

        document.getElementById("text").textContent = text;
    }
}

typeWriter();
