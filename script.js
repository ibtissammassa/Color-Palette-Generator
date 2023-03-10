const palettes = document.querySelector(".palettes");
const refreshBtn = document.querySelector(".generate");
const maxPalettes = 5;
const generatePalette = () => {
    palettes.innerHTML = ""; //clearing the container
    for (i = 0; i< maxPalettes ; i++) {

        //generating a random Hex color code 
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        //creating new li element and insering it to the palettes part
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="color-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`

        //adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        palettes.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then( () => {
        colorElement.innerText = "copied";
    })
}

refreshBtn.addEventListener("click", generatePalette);