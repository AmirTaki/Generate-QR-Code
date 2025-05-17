const downloadBtn = document.getElementById("downloadBtn")
const  generateBtn = document.getElementById("generateBtn")
const  qrtText = document.getElementById("qr-text")
const  sizes = document.getElementById("sizes")

const qrContainer = document.querySelector('.qr-body')

let size = sizes.value
sizes.addEventListener('change',(event)=>{
     size = event.target.value
      generateQRCode()
} )


//https://davidshimjs.github.io/qrcodejs/

const generateQRCode = () => {
    qrContainer.innerHTML = ''  // remove

    // create new QRCode
    new QRCode (qrContainer , {
        text : qrtText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        // correctLevel : QRCode.CorrectLevel.H
    })
}
generateBtn.addEventListener('click', (eve)=> {
    eve.preventDefault();
    generateQRCode()
})
