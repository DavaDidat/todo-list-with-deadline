### 🧠 Smart Todo List (Vanilla JavaScript)

Aplikasi Todo List interaktif yang dibuat menggunakan HTML, CSS, dan JavaScript murni (Vanilla JS).

Project ini memiliki fitur deadline, deteksi otomatis tugas yang terlambat (overdue), animasi halus, dan penyimpanan data menggunakan LocalStorage.

---

## ✨ Fitur

✅ Menambahkan tugas baru
🗑 Menghapus tugas dengan animasi smooth
✔ Menandai tugas sebagai selesai (klik pada teks tugas)
🗓 Menambahkan deadline (tanggal & waktu)
⚠ Deteksi otomatis tugas yang terlambat (background berubah merah)
💾 Data tersimpan otomatis menggunakan LocalStorage
🎬 Animasi fade-in & fade-out saat tambah/hapus tugas
🎨 Tampilan modern dengan Flexbox

---

## 🛠 Teknologi yang Digunakan

-HTML5
-CSS3 (Flexbox, Transition, Animasi)
-JavaScript (Vanilla JS)
-LocalStorage API

---

## 📂 Struktur Project
smart-todo-list/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## ⚙ Cara Kerja Aplikasi
1️⃣ Menambahkan Tugas

-User memasukkan teks tugas

-Bisa menambahkan deadline (opsional)

-Data dimasukkan ke dalam array todos

-Fungsi render() dipanggil untuk memperbarui tampilan

2️⃣ Menyelesaikan Tugas

-Klik pada teks tugas

-Status completed akan berubah

-CSS otomatis memberi efek coret dan opacity

3️⃣ Deteksi Overdue

-Jika tugas memiliki deadline

-Dan belum selesai

-Dan waktu deadline sudah lewat

-Maka otomatis diberi class .overdue

-Background berubah merah

4️⃣ Menghapus Tugas

-Animasi fade-out berjalan

-Data dihapus dari array

-UI dirender ulang

----

## 🧠 Konsep yang Dipelajari

-Manipulasi DOM
-Pembuatan elemen secara dinamis
-Event handling
-Manajemen state menggunakan array
-Conditional rendering
-Perbandingan tanggal (Date object)
-Animasi menggunakan CSS transition
-Pemisahan struktur (HTML), style (CSS), dan logic (JS)

---

## 📌 Latar Belakang Project

Ini adalah versi kedua dari project Todo List yang saya buat.

Dibandingkan versi pertama, versi ini memiliki:

-Sistem deadline
-Deteksi tugas terlambat
-Animasi lebih halus
-Struktur kode lebih rapi
-Manajemen state lebih baik

Project ini menunjukkan perkembangan dalam memahami JavaScript dan pengelolaan UI secara lebih terstruktur.

---

## 🚀 Dibuat Oleh

Project ini dibuat sebagai bagian dari proses belajar JavaScript dan pengembangan web.

---

## Link URL Jika ingin melihat hasil nya 
https://davadidat.github.io/todo-list-with-deadline/
