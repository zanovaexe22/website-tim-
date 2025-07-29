function tampilkanDeskripsi(role) {
  if (role === 'wakil') {
    var el = document.getElementById('deskripsi-wakil');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  } else if (role === 'ketua') {
    var el = document.getElementById('deskripsi-ketua');
    el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
  }
}
