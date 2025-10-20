let selectedPackage = null;

// Khi chọn gói
function selectPackage(pkg) {
  const packages = document.querySelectorAll('.package');
  packages.forEach(p => p.classList.remove('active'));

  const selected = packages[pkg - 1];
  selected.classList.add('active');
  selectedPackage = selected.querySelector('h3').innerText;
}

// Mở hộp chọn liên hệ
function bookNow() {
  if (!selectedPackage) {
    alert("Vui lòng chọn một gói chụp trước khi đặt!");
    return;
  }
  document.getElementById("contactModal").style.display = "flex";
}

// Đóng hộp
function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

// --- GỬI TIN NHẮN TỰ ĐỘNG ---

// Liên hệ qua Facebook Messenger
function contactFacebook() {
  if (!selectedPackage) return;
  const message = encodeURIComponent(`Chào Tiệm Ảnh Flop’, tôi muốn đặt ${selectedPackage} 📸`);
  // Link đến Messenger (đúng cú pháp mở sẵn khung chat + tin nhắn)
  window.open(`https://m.me/Iuqanh?text=${message}`, "_blank");
  closeModal();
}

// Liên hệ qua Zalo
function contactZalo() {
  if (!selectedPackage) return;
  const message = encodeURIComponent(`Chào Tiệm Ảnh Flop’, tôi muốn đặt ${selectedPackage} 📸`);
  // Link zalo.me với tin nhắn sẵn
  window.open(`https://zalo.me/0383070200?text=${message}`, "_blank");
  closeModal();
}

// Hiệu ứng khi chọn gói
document.querySelectorAll('.package').forEach(pkg => {
  pkg.addEventListener('click', () => {
    pkg.classList.add('click-animate');
    setTimeout(() => pkg.classList.remove('click-animate'), 300);
  });
});
