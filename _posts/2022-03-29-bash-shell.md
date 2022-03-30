---
title: Bash Shell
category: linux
author: memet
tags: linux bash 
---

Bash shell `de facto` di sebagian besar sistem yang akan kamu temui seperti: Linux, macOS, dan WSL di Windows 10. 

Ada alasan historis yang menjadikan Bash shell paling populer di dunia. Kembali pada tahun 1989, ketika pertama kali dirilis, dunia teknologi sangat berbeda. Pada saat itu, sebagian besar perangkat lunak di dunia UNIX adalah (close source). Unix berpemilik dan dengan sumber yang tertutup.

Untuk menggunakan sistem UNIX kamu harus menggunakan shell. 

Shell paling populer saat itu adalah sumber tertutup dan berpemilik, Kamu harus membayar untuk menggunakannya. Itu adalah Bourne Shell, tersedia di bawah perintah `/bin/sh`. Itu disebut "Bourne" karena penciptanya adalah Steve Bourne. 

Richard Stallman pada tahun-tahun dengan Proyek GNU (dan kemudian di Linux) akan merevolusi segalanya, memulai revolusi Open Source. Proyek GNU membutuhkan shell, dan, dengan bantuan Free Software Foundation, Bash lahir. Sangat terinspirasi oleh Bourne Shell, Bash berarti `Bourne-again shell` dan merupakan salah satu bahan utama dari Proyek GNU, dan mungkin salah satu perangkat lunak paling sukses yang masih kita gunakan sampai sekarang. 

Bash dapat menjalankan semua skrip yang ditulis dengan format `sh`, yang merupakan fitur wajib untuk penerapannya, dan juga memperkenalkan lebih banyak fitur, sejak awal, menawarkan pengalaman yang lebih baik kepada penggunanya. Sejak hari-hari awal itu, Bash memperoleh banyak peningkatan. Tutorial ini menjelaskan hal-hal paling populer dan berguna yang dapat kamu lakukan dengannya. 

### Langkah pertama di Bash
Karena Bash adalah shell default di banyak sistem, yang kamu butuhkan untuk memulai shell bash adalah 

- masuk ke sistem, jika itu adalah server
- buka terminal, jika itu komputer lokal 

Segera setelah kamu melakukannya, kamu akan melihat prompt (yang biasanya diakhiri dengan `$`).

Bagaimana kita bisa tahu jika Shell menjalankan bash? Coba ketik `help` dan menekan enter. 

![ss-ubuntu](https://telegra.ph/file/e55a5611c1edfca3ca0ae.png)

lihat? kita baru saja menyuruh Bash untuk mengeksekusi perintah `help`. Perintah ini secara bergantian menunjukkan versi Bash yang kamu jalankan dan daftar perintah yang dapat di gunakan.

Lebih sering daripada tidak, kamu tidak akan pernah menggunakan perintah apa pun yang tercantum dalam bantuan bash, kecuali jika kamu membuat skrip shell atau hal-hal lanjutan.

99% dari penggunaan shell sehari-hari adalah menvigasi folder dan menjalankan program seperti `ls`, `cd` dan utilitas LINUX umum lainnya. 

### Menavigasi sistem file 
Untuk menavigasi melalui sistem file kamu akan menggunakan perintah `ls`. Ini tersedia di `/bin/ls`, dan karena Bash memiliki `/bin` folder dalam daftar jalurnya, kamu cukup mengetik `ls` untuk menggunakannya. 

`ls` list daftar file dalam folder saat ini. kamu biasanya mulai dari folder home kamu, yang tergantung pada sistem tetapi pada linux ada di bawah `/home`. Folder rumah saya ada di `/home/memet`. Ini tidak terkait dengan Bash, ini lebih merupakan masalah sistem file linux, tetapi argumen tumpang tindih dan jika kamu belum pernah menggunakan Shell, ada baiknya untuk mengetahuinya. 

![ss-ls](https://telegra.ph/file/d5333267fb17f39f99e0d.png)

Untuk menavigasi ke folder lain kamu bisa menggunakan perintah `cd`, diikuti dengan nama folder yang ingin kamu masuki: 

{% highlight bash %}
cd Documents
{% endhighlight %}
`cd ..` kembali ke folder induk. 

Tergantung pada konfigurasi Bash kamu, kamu akan melihat foldermu saat ini ditampilkan sebelum prompt (the `$` simbol). Atau mungkin tidak, tetapi kamu selalu dapat mengetahui di mana kamu berada dengan mengetik `pwd` dan menekan `enter`. 

> `pwd` berarti *p*athname(nama jalur) dari *w*orking(kerja) *d*irectory(direktori)

### Pengeditan baris perintah 
Saat kamu menulis perintah di shell, perhatikan bahwa kamu dapat bergerak ke kiri dan ke kanan dengan tombol panah. Ini adalah fitur shell. kamu dapat bergerak di sekitar perintah mu, tekan tombol spasi mundur dan perintah yang benar. Menekan `enter` key memberitahu shell untuk mengeksekusi dan membiarkan sistem menjalankan perintah.

Ini adalah perilaku yang normal dan diterima, tetapi sesuatu yang mungkin membuat "wow" pengguna UNIX awal.


`Bersambung....`
