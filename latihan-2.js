function hitungVolumeBalok(p, l, t) {
  return p * l * t;
}

var p = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗩𝗼𝗹𝘂𝗺𝗲 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai panjang :")
);
var l = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗩𝗼𝗹𝘂𝗺𝗲 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai lebar :")
);
var t = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗩𝗼𝗹𝘂𝗺𝗲 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai tinggi :")
);
var hasil = hitungVolumeBalok(p, l, t);
document.write("Volume Balok = " + hasil);
//  /////
document.write("<br>");
// /////
function hitungLuasPermukaanBalok(p, l, t) {
  return 2 * (p * l + p * t + l * t);
}

var p = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗟𝘂𝗮𝘀 𝗣𝗲𝗿𝗺𝘂𝗸𝗮𝗮𝗻 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai panjang :")
);
var l = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗟𝘂𝗮𝘀 𝗣𝗲𝗿𝗺𝘂𝗸𝗮𝗮𝗻 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai lebar :")
);
var t = parseInt(
  prompt("𝗠𝗲𝗻𝗴𝗵𝗶𝘁𝘂𝗻𝗴 𝗟𝘂𝗮𝘀 𝗣𝗲𝗿𝗺𝘂𝗸𝗮𝗮𝗻 𝗕𝗮𝗹𝗼𝗸" + "\n\nMasukan nilai tinggi :")
);
var hasil = hitungLuasPermukaanBalok(p, l, t);
document.write("Luas Permukaan Balok = " + hasil);
