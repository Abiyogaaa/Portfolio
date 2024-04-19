window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-wrapper");
    loader.style.display = "none"; // Sembunyikan loader saat konten telah dimuat
    document.querySelector(".content").style.display = "block"; // Tampilkan konten utama
  });
  window.addEventListener("load", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(function(element, index) {
      setTimeout(function() {
        element.classList.add("active");
      }, index * 1000); // Perubahan di sini, 500 adalah jeda waktu antara setiap elemen muncul
    });
  });
  