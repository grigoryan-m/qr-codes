document.addEventListener("DOMContentLoaded", () => {

    const generate = document.getElementsByClassName("create")[0];
    const output = document.getElementsByClassName("qrcode")[0];
    const text = document.getElementsByClassName("text")[0];

    generate.addEventListener("click", ()=>{
        output.innerHTML = '';
        var qrCode = new QRCode(output, {
            text: text.value,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    });
    document.addEventListener("keydown", (event) => {
        if(event.keyCode === 13){
            output.innerHTML = '';
            var qrCode = new QRCode(output, {
            text: text.value,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        }
    });
});