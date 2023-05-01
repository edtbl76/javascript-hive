class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  const balloonAttack = (player1, player2) => {
    for (let i = 1; i <= 10; i++){
      player2.balloonCount -= player1.hitsPerMinute
      player1.balloonCount -= player2.hitsPerMinute
      player1.status();
      player2.status();
    }
    if (player1.balloonCount > player2.balloonCount) {
      return player1.name;
    }else if (player2.balloonCount > player1.balloonCount)
      return player2.name
  
    return 'Tie'
  }