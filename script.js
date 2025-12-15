// ==== ALERT PEMBUKA ====
alert("Selamat datang di halaman produk Seblak Kartini 🔥");
console.log("=== Seblak Kartini ===");

// ==== VARIABEL DASAR ====
const namaUMKM = "Seblak Kartini";
let jumlahProduk = 25;
console.log("Nama UMKM:", namaUMKM);
console.log("Jumlah produk tersedia:", jumlahProduk);

// ==== 1. Percabangan: Cek kategori usia ====
function cekKategoriUsia() {
  const usia = parseInt(document.getElementById("usiaInput").value);
  let kategori = "";

  if (usia < 13) {
    kategori = "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    kategori = "Remaja";
  } else if (usia >= 18 && usia <= 60) {
    kategori = "Dewasa";
  } else if (usia > 60) {
    kategori = "Lansia";
  } else {
    kategori = "Usia tidak valid";
  }

  document.getElementById("hasilUsia").textContent = `Kategori: ${kategori}`;
  console.log("Usia pengguna:", usia, "| Kategori:", kategori);
}

// ==== 2. Perulangan: Testimoni pelanggan ====
const testimoni = [
  "Seblaknya pedasnya pas banget! 🔥",
  "Pengiriman cepat, rasa mantap!",
  "Kemasan rapi dan higienis.",
  "Porsi banyak, harga bersahabat.",
  "Langganan tiap minggu, gak pernah bosan!"
];

const container = document.getElementById("testimoniContainer");

testimoni.forEach((isi) => {
  const card = document.createElement("div");
  card.className = "testi-card";
  card.textContent = isi;
  container.appendChild(card);
});

// ==== 3. Fungsi: Hitung total belanja ====
function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

function hitungTotalBelanja() {
  const harga = parseFloat(document.getElementById("harga").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const total = hitungTotal(harga, jumlah);

  document.getElementById("hasilTotal").textContent = `Total Belanja Anda: Rp ${total.toLocaleString()}`;
  console.log("Harga:", harga, "| Jumlah:", jumlah, "| Total:", total);
  return false; // mencegah reload form
}
