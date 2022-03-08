function hitungLuasPersegiPanjang(a, b) {
  return a * b;
}

var a = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗟𝘂𝗮𝘀 𝗣𝗲𝗿𝘀𝗲𝗴𝗶 𝗣𝗮𝗻𝗷𝗮𝗻𝗴" + "\n\nMasukan nilai panjang :")
);
var b = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗟𝘂𝗮𝘀 𝗣𝗲𝗿𝘀𝗲𝗴𝗶 𝗣𝗮𝗻𝗷𝗮𝗻𝗴" + "\n\nMasukan nilai lebar :")
);
var hasil = hitungLuasPersegiPanjang(a, b);
document.write("Luas Persegi Panjang = " + hasil);
