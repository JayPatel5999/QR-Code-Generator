let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrcode"); // Corrected variable name
let qrtext = document.getElementById("QRtext");

function QrGenerate(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    qrtext.value = '';
    imgBox.classList.add("show-img");
}
