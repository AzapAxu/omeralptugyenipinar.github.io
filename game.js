
// Oyun alanını ve skor tahtasını seçin
var gameboard = document.getElementById("gameboard");
var scoreboard = document.getElementById("scoreboard");

// Başlangıç skoru ve meyve sayısını ayarlayın
var score = 0;
var numFruits = 0;

// Meyve resimlerini rastgele bir konuma yerleştirin
function createFruit() {
	var fruit = document.createElement("img");
	fruit.className = "fruit";
    fruit.src = "images/apple.jpg";
	fruit.style.left = Math.floor(Math.random() * (gameboard.offsetWidth - fruit.offsetWidth)) + "px";
	fruit.style.top = Math.floor(Math.random() * (gameboard.offsetHeight - fruit.offsetHeight)) + "px";
	gameboard.appendChild(fruit);
    fruit.addEventListener("click", function() {
		gameboard.removeChild(fruit);
		score++;
		scoreboard.textContent = score + " / 20";
		if (++numFruits === 20) {
			alert("You Won!");
		}
	});
	gameboard.appendChild(fruit);
}

// 3 saniye aralıklarla meyve oluşturun
setInterval(createFruit, 3000);