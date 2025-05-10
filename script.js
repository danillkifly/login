const input = document.getElementById("PINInput");
const loadingOverlay = document.getElementById("loading-overlay");

const allowedPasswords = ["111111", "admin1", "kifly1"];

input.addEventListener("input", function () {
  if (input.value.length === 6) {
    if (allowedPasswords.includes(input.value)) {
      loadingOverlay.style.display = "flex"; // Tampilkan loading
      setTimeout(() => {
        window.location.href = "https://danillkifly.github.io/";
      }, 2000); // Tunda 2 detik sebelum pindah halaman
    } else {
      alert("Password salah!");
      input.value = "";
    }
  }
});
