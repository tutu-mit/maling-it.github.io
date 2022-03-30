---
title: apa itu rEFInd?
author: memet
category: linux
tags: linux refind bootloader
---
Beberapa hari terakhir banyak sekali yang mengalami kendala di grub2 seperti

 - Grub tidak bisa booting OS
 - UUID partisi berubah
 - Bootable OS tidak terdeteksi
 - dan semacamnya

Saya pernah mengalami semua diatas dan akhirnya mencari referensi untuk menyelesaikan masalahnya, dan ketemu yang namanya rEFInd.

## Apa itu rEFInd?

 rEFInd adalah boot manager untuk komputer EFI dan UEFI yang bisa mem-boot banyak OS seperti linux, windows dan MAC. ini sangat berguna jika anda yang suka distrohoping atau punya beberapa OS di satu sistem yang sama. dan perlu diketahui bawha rEFInd tidak akan bisa digunakan jika perangkat anda berbasis BIOS (EFI ONLY), atau komputer tua sebelum tahun 2011 atau lebih lama. atau juga pada sistem dengan jenis firmware lain, seperti Mac berbasis PowerPC.
 
 beberapa komputer di luar Mac berbasis Intel menggunakan EFI; namun mulai tahun 2011, produsen komputer mulai berbondong-bondong mengadopsi UEFI, sehingga kebanyakan komputer yang dibeli sejak saat itu menggunakan EFI. Meski begitu, banyak PC modern mendukung boot gaya EFI dan boot gaya BIOS, yang terakhir melalui mode kompatibilitas BIOS yang dikenal sebagai Compatibility Support Module (CSM). Dengan demikian, Anda mungkin menggunakan boot gaya BIOS pada komputer berbasis EFI.
 
 rEFInd sendiri merupakan kembangan dari rEFIt yang tidak ada perkembangan sejak tahun 2010.
 
### Apa keuntungan yang didapatkan menggunakan rEFInd??
 
 - Tidak perlu masuk BIOS lagi untuk mengubah urutan boot
 - Dukungan Tema yang bisa di ubah sesuka hati
 - dan banyak lagi

### Support Instalasi

- Binary ZIP file
- Binary RPM file
- Binary Debian Package
- CD-R image file
- Source code Tarball
- Source code Git


#### Instalasi Debian

{% highlight bash %}
 sudo apt-add-repository ppa:rodsmith/refind
 sudo apt-get update
 sudo apt-get install refind
{% endhighlight %}

#### Instalasi Void Linux
{% highlight bash %}
search refind
get refind
{% endhighlight %}

Silahkan Kunjungi link berikut
[rEFInd](http://www.rodsbooks.com/refind/getting.html)


Source
- [rEFInd](http://www.rodsbooks.com/refind/)


Sekian.
