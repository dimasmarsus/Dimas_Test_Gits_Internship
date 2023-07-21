Penjelasan untuk soal nomer 3 ialah :
1. Fungsi isBalancedBrackets mengambil satu argumen yaitu str, yang merupakan string yang akan diperiksa apakah tanda kurungnya seimbang atau tidak.
2. Fungsi ini menggunakan pendekatan Stack untuk melacak karakter-karakter tanda kurung buka yang ada pada string.
3. Selama melintasi string, jika karakter merupakan tanda kurung buka ((, [, atau {), karakter tersebut akan ditambahkan ke dalam stack.
4. Jika karakter merupakan tanda kurung tutup (), ], atau }), maka kita akan memeriksa apakah stack kosong atau karakter tanda kurung tutup tersebut cocok
   dengan tanda kurung buka yang teratas di stack. Jika cocok, maka tanda kurung buka tersebut akan dihapus dari stack.
5. Jika karakter tanda kurung tutup tidak cocok dengan tanda kurung buka di stack atau stack kosong, maka fungsi akan mengembalikan "NO", karena tanda
   kurung tidak seimbang.
6. Setelah semua karakter dalam string diproses, jika stack masih memiliki elemen, berarti tanda kurung dalam string tidak seimbang dan fungsi akan mengembalikan
   "NO". Jika stack kosong, berarti tanda kurung dalam string seimbang dan fungsi akan mengembalikan "YES".
7. Kompleksitas kodingan ini adalah O(n), di mana n adalah panjang string str. Karena setiap karakter dalam string diproses sekali, maka waktu eksekusi
   bergantung pada panjang string input. Selain itu, dalam pendekatan Stack ini, jumlah operasi push dan pop pada stack tergantung pada jumlah karakter
   tanda kurung buka dan tutup dalam string. Maksimum operasi push dan pop adalah sebesar n/2, sehingga tidak melebihi jumlah karakter dalam string, sehingga
   kompleksitas keseluruhan tetap O(n).
