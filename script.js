const input = document.getElementById("passwordInput");

// Daftar password yang diterima
const allowedPasswords = ["111111", "admin1", "kifly1"];

input.addEventListener("input", function () {
  if (input.value.length === 6) {
    if (allowedPasswords.includes(input.value)) {
      window.location.href = "https://danillkifly.github.io/"; // Ganti ke halaman tujuanmu
    } else {
      alert("Password salah!");
      input.value = ""; // Kosongkan input setelah salah
    }
  }
});
