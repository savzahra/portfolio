
function showSection(id) {
  // Sembunyikan semua section
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Tampilkan section yang dipilih
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}
