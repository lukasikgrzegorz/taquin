document.getElementById("hiscore").style.display = "none";


function cellPositionUpdate() {
     for (i = 0; i < 16; i++){
        document.getElementById(i + 1).innerHTML = gameArea[i];
    }
}

function randomGenetator(min, max) {
	let a = max-min+1;
	let b=Math.random()*a;
	let c=Math.floor(b)+min;
    randomNumber = c;
}

function cellStartPosition() {
    for (i = 0; i < 16; i++){
        gameArea.push(i+1)
    }
    
    document.getElementById(gameArea[gameArea.length-1]).classList.add("empty");
    cellPositionUpdate();
}

cellStartPosition();

function updateCounter() {
    moveCounter++;
    document.getElementById("moveCounter-container").innerHTML = "move:"+moveCounter;
}

function move(a) {
    if (gameArea[a + 4] == 16) {
        gameArea[a + 4] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1+4).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
        updateCounter();
        checkWin();
    }

    if (gameArea[a - 4] == 16) {
        gameArea[a - 4] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1-4).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
        updateCounter();
        checkWin();
    }

    if (gameArea[a + 1] == 16 && (a+1)%4!=0) {
        gameArea[a + 1] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1+1).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
        updateCounter();
        checkWin();
    }

    if (gameArea[a - 1] == 16 &&(a+1)%4!=1) {
        gameArea[a - 1] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1-1).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
        updateCounter();
        checkWin();
    }

}

function moveAI() {
        
    let moveTab = [];
    let a = gameArea.indexOf(16);

    if (a + 4 <= 15) { moveTab.push(a + 4); }
    if (a - 4 >= 0) { moveTab.push(a - 4); }
    if ((a + 1) % 4 != 0) { moveTab.push(a + 1); }
    if ((a + 1) % 4 != 1) { moveTab.push(a - 1);}
        
    randomGenetator(0, moveTab.length - 1);
    move(moveTab[randomNumber]);
    
}

function randomSorting() {
    let i = 0;
    randomGenetator(0,400);
    let max = randomNumber;
    do {
        moveAI();
        i++
    } while (i < max);
    moveCounter = 0;
    document.getElementById("moveCounter-container").innerHTML = "move: " + moveCounter;
}

function startGame() {
    randomSorting();
    document.getElementById("menu").style.display = "none";
    document.getElementById("hiscore").style.display = "flex";
}

function checkWin() {
    let winCounter = 0;
    for (i = 0; i < gameArea.length; i++){
        if (gameArea[i] == i + 1) { winCounter++ };
    }
    if (winCounter == 16) {
        document.getElementById("hiscore").innerHTML = "you win!<br>game will be restarted";
        setTimeout(function(){document. location. reload()},6000);
    }
    
}



