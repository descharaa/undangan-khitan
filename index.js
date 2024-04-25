function copyToClipboard() {
  // Pilih elemen yang akan disalin
  var copyText = document.getElementById("copyText");

  // Buat textarea sementara untuk menyalin teks
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = copyText.innerText;
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam textarea
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // Untuk dukungan browser yang lebih luas

  // Salin teks ke papan klip
  document.execCommand("copy");

  // Hapus textarea sementara
  document.body.removeChild(tempTextArea);

  // Beri tahu pengguna bahwa teks telah disalin
  alert("Teks telah disalin ke papan klip!");
}
