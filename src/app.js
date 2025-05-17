const downloadBtn = document.getElementById("downloadBtn")
const  generateBtn = document.getElementById("generateBtn")
const  qrtText = document.getElementById("qr-text")
const  sizes = document.getElementById("sizes")

const qrContainer = document.querySelector('.qr-body')

let size = sizes.value


// function value.lenght (input)
const isEmptyInput = () => {
    (qrtText.value.length > 0) ? generateQRCode() :  window.alert('Enter the text or URL to generate your QR code')
}

//create new QR COOD
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

sizes.addEventListener('change',(event)=>{
    
    size = event.target.value

    isEmptyInput()

} )

generateBtn.addEventListener('click', (event)=> {
    
    event.preventDefault();
    
    isEmptyInput()

})


// download img QRCode
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img')

    if (img.getAttribute('src') !== null ) {
        
        let SRC = img.getAttribute('src')
      
        downloadBtn.setAttribute('herf', SRC)
    } 
    else {
        downloadBtn.setAttribute('herf', `${document.querySelector('canvas').toDataURL()}`)
    }
})