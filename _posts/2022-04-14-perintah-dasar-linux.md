---
title: Perintah Dasar Terminal Linux
category: linux
tags: linux command
author: memet
---

## Perintah Dasar di terminal Linux
Seiring makin berkembangnya Linux, saat ini program Linux dengan tampilan yang mendukung GUI
(Graphical User Interface) makin banyak. Dengan GUI (Graphical User Interface) sehingga pengguna
semakin dipermudah dalam mengoperasikan. Konsekuensi dari penggunaan GUI di Linux adalah
memperberat kerja sistem terutama komputer dengan spesifikasi yang minimum jadul.
Mekipun GUI sudah banyak beredar, perintah-perintah melalui terminal linux penggunaannya
terkadang tidak bisa kita hindari. Dalam beberapa kasus penggunaan terminal linux sangat mutlak.
Hal inilah yang mendorong bagi kita untuk mengenal perintah-perintah dasar di terminal linux.
Sebagai permulaan, berikut ini adalah beberapa perintah-perintah dasar yang biasa digunakan di
Linux, antara lain:



<table class="table table-hover table-bordered">
  <thead>
    <tr>
      <th>Nama</th>
      <th style="text-align: center">Info</th>
    </tr>
  </thead>
  <tbody>
  {% for pd in site.data.perintah.per %}
    <tr>
      <td>{{ pd.nama }}</td>
      <td>{{ pd.desc | markdownify }}</td>
    </tr>
{% endfor %}
  </tbody>
</table>
