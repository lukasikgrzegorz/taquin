function cellPositionUpdate() {
     for (i = 0; i < 16; i++){
        document.getElementById(i + 1).innerHTML = gameArea[i];
    }
}

function cellStartPosition() {
    for (i = 0; i < 16; i++){
        gameArea.push(i+1)
    }
    
    document.getElementById(gameArea[gameArea.length-1]).classList.add("empty");
    cellPositionUpdate();
}

cellStartPosition();


function move(a) {
    if (gameArea[a + 4] == 16) {
        gameArea[a + 4] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1+4).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
    }

    if (gameArea[a - 4] == 16) {
        gameArea[a - 4] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1-4).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
    }

    if (gameArea[a + 1] == 16 && (a+1)%4!=0) {
        gameArea[a + 1] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1+1).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
    }

    if (gameArea[a - 1] == 16 &&(a+1)%4!=1) {
        gameArea[a - 1] = gameArea[a];
        gameArea[a] = 16;
        document.getElementById(a+1-1).classList.remove("empty");
        document.getElementById(a+1).classList.add("empty");
        cellPositionUpdate();
    }

  
}
