function denseRanking(numPlayers, playerScores, numGames, gitsScores) {
    // Menghilangkan skor duplikat dengan cara mengubahnya menjadi Set
    const uniqueScores = Array.from(new Set(playerScores));
    
    // Mengurutkan skor dari terbesar ke terkecil
    const sortedScores = uniqueScores.sort((a, b) => b - a);
    
    // Fungsi untuk menentukan peringkat berdasarkan skor
    function getRank(score) {
      const rank = sortedScores.indexOf(score) + 1;
      return rank;
    }
    
    // Menghitung peringkat untuk setiap skor milik GITS
    const gitsRanks = gitsScores.map((score) => getRank(score));
    return gitsRanks;
  }
  
  // Contoh pemanggilan fungsi dengan input yang berbeda
  const numPlayers = 7;
  const playerScores = [100, 100, 50, 40, 40, 20, 10];
  const numGames = 4;
  const gitsScores1 = [5, 25, 50, 120];
  const result1 = denseRanking(numPlayers, playerScores, numGames, gitsScores1);
  console.log("Hasil peringkat GITS (Input 1):", result1.join(' '));
  
  const gitsScores2 = [60, 70, 100];
  const result2 = denseRanking(numPlayers, playerScores, numGames, gitsScores2);
  console.log("Hasil peringkat GITS (Input 2):", result2.join(' '));
  
  const gitsScores3 = [20, 100, 40, 30, 10];
  const result3 = denseRanking(numPlayers, playerScores, numGames, gitsScores3);
  console.log("Hasil peringkat GITS (Input 3):", result3.join(' '));
  