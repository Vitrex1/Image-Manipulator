function colorChange(rmin=232, rmax=241, gmin=151, gmax=163, bmin=116, bmax=129, contextIN=myContext1, contextOUT=myContext2) {
    var randomR = Math.floor(Math.random() * 255);
    var randomG = Math.floor(Math.random() * 255);
    var randomB = Math.floor(Math.random() * 255);
    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = contextIN.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;

            if (r > rmin && r<rmax && g > gmin && g < gmax && b > bmin && b < bmax) {
                r = randomR;
                g = randomG;
                b = randomB;
            }
            else {
                var r = DataIN[0];
                var g = DataIN[1];
                var b = DataIN[2];
            }
            contextOUT.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            contextOUT.fillRect(xe, ye, 1, 1);
        }
    }
}

function colorChangeRandRange(contextIN=myContext1, contextOUT=myContext2) {
    do {
    var randomMax = Math.floor(Math.random() * 255);
    var randomMin = Math.floor(Math.random() * (randomMax>1? randomMax : 0 ));
    }while(randomMax-randomMin<55 || randomMax-randomMin>120);
    
    colorChange(randomMin, randomMax, randomMin, randomMax, randomMin, randomMax, contextIN, contextOUT);
    
}

function colorChangeLoop() {
    colorChangeRandRange(myContext1, myContext2);
    colorChangeRandRange(myContext2, myContext3);
    colorChangeRandRange(myContext3, myContext4);
    colorChangeRandRange(myContext4, myContext5);
    colorChangeRandRange(myContext5, myContext6);
}