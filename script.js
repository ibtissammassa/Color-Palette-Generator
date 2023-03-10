
const refreshBtn = document.querySelector(".generate");
const maxPalettes = 5;

const generatePalette = () => {

    for (i = 0; i< maxPalettes ; i++) {

        //generating a random Hex color code 
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;/*The padStart function is used to ensure that the resulting string is 6 digits long 
        If the string is less than 6 digits, it pads the beginning of the string with 0's until it is 6 digits long.*/

        // Select the i-th li element's div and its child (span)
        const color = document.querySelectorAll(".color-box")[i];
        const hexValue = document.querySelectorAll(".hex-value")[i];

        //insering it to the palettes part
        color.style.background=randomHex;
        hexValue.textContent=randomHex;

        //adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // Copying the hex value, updating the text to copied,
    // and changing text back to original hex value after I second 
    navigator.clipboard.writeText(hexVal).then( () => {
        colorElement.innerText = "copied";
        setTimeout( () => colorElement.innerText = hexVal,600 )
    }).catch( () => alert("Failed to copy the color code!"));
            //showing alert if color can't be copied
}

refreshBtn.addEventListener("click", generatePalette);

