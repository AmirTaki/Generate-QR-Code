const downloadBtn = document.getElementById("downloadBtn")
const  generateBtn = document.getElementById("generateBtn")
const  qrtText = document.getElementById("qr-text")
const  sizes = document.getElementById("sizes")

const qrContainer = document.querySelector('.qr-body')

const generateQRCode = () => {
    new QRCode (qrContainer , {
        text : qrtText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
}
generateBtn.addEventListener('click', (eve)=> {
    eve.preventDefault();
    generateQRCode()
})