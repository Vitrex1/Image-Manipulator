function doRotation90Axy() {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) { // (xe, ye) -> (255 - ye, xe)
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext2.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext2.fillRect(255 - ye, xe, 1, 1);
        }
    }
}

function doRotation180Axy() {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext4.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext4.fillRect(255 - xe, 255 - ye, 1, 1);
        }
    }
}

function doRotation270Axy() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext5.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext5.fillRect(ye, 255 - xe, 1, 1);
        }
    }
}

function doRotations() {
    doClear();
    doRotation270AImageData();
    doRotation90AImageData();
    doRotation90Axy();
    doRotation270Axy();
    doRotation180Axy();
}

function doReflectionVerticalAxis() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext2.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext2.fillRect(255 - xe, ye, 1, 1);
        }
    }
}


function doReflectionHorizontalAxisFirst() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext3.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext3.fillRect(255 - xe, 255 - ye, 1, 1);
        }
    }
}

function doReflectionHorizontalAxisFirstVer2() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext5.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext5.fillRect(255 - xe, 255 - ye, 1, 1);
        }
    }
}

function doReflectionHorizontalAxis() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext4.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext4.fillRect(xe, 255 - ye, 1, 1);
        }
    }
}
function doReflectionHorizontalAxisVer1() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext6.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext6.fillRect(xe, 255 - ye, 1, 1);
        }
    }
}
function doReflectionDiagonalB() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext5.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext5.fillRect(255 - ye, 255 - xe, 1, 1);
        }
    }
}
function doReflectionDiagonalA() {
    // doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext6.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext6.fillRect(ye, xe, 1, 1);
        }
    }
}

function doReflectionLena() {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            myContext3.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            myContext3.fillRect(xe, ye, 1, 1);
        }
    }
}

function doReflections() {
    doClear();
    doReflectionVerticalAxis();
    doReflectionHorizontalAxisFirst();
    doReflectionHorizontalAxis();
    doReflectionDiagonalA();
    doReflectionDiagonalB();
}

function doReflections2() {
    doClear();
    doReflectionVerticalAxis();
    doReflectionHorizontalAxisFirstVer2();
    doReflectionHorizontalAxis();
    doReflectionHorizontalAxisVer1();
    doReflectionLena();
}

function doShiftOffsetX(context = myContext2, offset = 128) {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            context.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            context.fillRect(xe + ((xe > offset - 1) ? -offset : (255 - offset)), ye, 1, 1);
        }                           // ((xe>x-1) ? -x : 255-x)
    }
}

function doShiftOffsetY(context = myContext2, offset = 128) {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            context.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            context.fillRect(xe, ye + ((ye > offset - 1) ? -offset : (255 - offset)), 1, 1);
        }
    }
}

function doShiftOffsetXY(context = myContext2, offset = 128) {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe++) {
        for (let ye = 0; ye < myHeight; ye++) {
            var pixel = myContext1.getImageData(xe, ye, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            context.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            context.fillRect(xe + ((xe > offset - 1) ? -offset : +(255 - offset)), ye + ((ye > offset - 1) ? -offset : +(255 - offset)), 1, 1);
        }
    }
}

function pixelShift() {
    doShiftOffsetXY(myContext2);
    doShiftOffsetY(myContext3);
    doShiftOffsetX(myContext4);
    doShiftOffsetX(myContext5);
    doShiftOffsetY(myContext6);
}

function pixelShiftRandom() {
    var randomOffset = Math.floor(Math.random() * 250);
    doShiftOffsetXY(myContext2, randomOffset);
    doShiftOffsetY(myContext3, randomOffset);
    doShiftOffsetX(myContext4, randomOffset);
    doShiftOffsetX(myContext5, randomOffset);
    doShiftOffsetY(myContext6, randomOffset);
}

function doRotation90AImageData() {
    //doClear();
    var myImageDataIN = myContext1.getImageData(0, 0, myWidth, myHeight);
    var myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;


    for (let i = 0; i < myDataIN.length; i += 4) {
        var xe = Math.floor(i / 4) % myWidth;
        var ye = Math.floor(Math.floor(i / 4) / myWidth);
        var desc = myWidth * xe + 255 - ye;
        myDataOUT[desc * 4] = myDataIN[i];
        myDataOUT[desc * 4 + 1] = myDataIN[i + 1];
        myDataOUT[desc * 4 + 2] = myDataIN[i + 2];
        myDataOUT[desc * 4 + 3] = myDataIN[i + 3];
    }
    myContext3.putImageData(myImageDataOUT, 0, 0);
}

function doRotation270AImageData() {
    //doClear();
    var myImageDataIN = myContext1.getImageData(0, 0, myWidth, myHeight);
    var myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;


    for (let i = 0; i < myDataIN.length; i += 4) {
        var xe = Math.floor(i / 4) % myWidth;
        var ye = Math.floor(Math.floor(i / 4) / myWidth);
        var desc = myWidth * (255 - xe) + ye;
        myDataOUT[desc * 4] = myDataIN[i];
        myDataOUT[desc * 4 + 1] = myDataIN[i + 1];
        myDataOUT[desc * 4 + 2] = myDataIN[i + 2];
        myDataOUT[desc * 4 + 3] = myDataIN[i + 3];
    }
    myContext6.putImageData(myImageDataOUT, 0, 0);
}

function rotationsThetaVer1(myCanvasIN, myCanvasOUT, Theta, xs = myWidth / 2, ys = myHeight / 2) {
    var myContextIN = myCanvasIN.getContext('2d');
    var myContextOUT = myCanvasOUT.getContext('2d');
    var myImageDataIN = myContextIN.getImageData(0, 0, myWidth, myCanvasOUT.height);
    var myImageDataOUT = myContextOUT.getImageData(0, 0, myWidth, myCanvasOUT.height);
    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;
    var x1, y1;
    var cost = Math.cos(Theta * Math.PI / 180.0);
    var sint = Math.sin(Theta * Math.PI / 180.0);
    for (let i = 0; i < myDataIN.length; i += 4) {
        var xe = Math.floor(i / 4) % myWidth;
        var ye = Math.floor(Math.floor(i / 4) / myWidth);
        x1 = xs + Math.floor((xe - xs) * cost + (ye - ys) * sint + 0.5);
        y1 = ys + Math.floor(-(xe - xs) * sint + (ye - ys) * cost + 0.5);
        if ((x1 >= 0) && (x1 < myWidth) && (y1 >= 0) && (y1 < myHeight)) {
            var j = (myWidth * y1 + x1) * 4;
            myDataOUT[i] = myDataIN[j];
            myDataOUT[i + 1] = myDataIN[j + 1];
            myDataOUT[i + 2] = myDataIN[j + 2];
            myDataOUT[i + 3] = myDataIN[j + 3];
        } else {
            myDataOUT[i] = 0xCC;
            myDataOUT[i + 1] = 0xCC;
            myDataOUT[i + 2] = 0xCC;
            myDataOUT[i + 3] = 255;
        }
    }
    myContextOUT.putImageData(myImageDataOUT, 0, 0);
}


function doRotationsThetaVer1() {
    doClear();
    rotationsThetaVer1(myCanvas1, myCanvas2, 15);
    rotationsThetaVer1(myCanvas1, myCanvas3, 30);
    rotationsThetaVer1(myCanvas1, myCanvas4, 45);
    rotationsThetaVer1(myCanvas1, myCanvas5, 60);
    rotationsThetaVer1(myCanvas1, myCanvas6, 75);

}
function doRotationsThetaVer2() {
    doClear();
    rotationsThetaVer1(myCanvas1, myCanvas2, 15);
    rotationsThetaVer1(myCanvas2, myCanvas3, 15);
    rotationsThetaVer1(myCanvas3, myCanvas4, 15);
    rotationsThetaVer1(myCanvas4, myCanvas5, 15);
    rotationsThetaVer1(myCanvas5, myCanvas6, 15);
}

function magnification(baseContext = myContext1, endContext = myContext2, offsetx = 0, offsety = 0) {
    //doClear( );

    for (let xe = 0; xe < myWidth / 2; xe++) { // (xe, ye) -> (255 - ye, xe)
        for (let ye = 0; ye < myHeight / 2; ye++) {
            var pixel = baseContext.getImageData(xe + offsetx, ye + offsety, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            endContext.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            endContext.fillRect(2 * xe, 2 * ye, 1, 1);
            endContext.fillRect(2 * xe + 1, 2 * ye, 1, 1);
            endContext.fillRect(2 * xe, 2 * ye + 1, 1, 1);
            endContext.fillRect(2 * xe + 1, 2 * ye + 1, 1, 1);
        }
    }
}

function magnificationLoop() {
    magnification(myContext1, myContext2);
    magnification(myContext2, myContext3);
    magnification(myContext3, myContext4);
    magnification(myContext4, myContext5);
    magnification(myContext5, myContext6);
}

function magnificationOneToFour() {
    magnification(myContext1, myContext2);
    magnification(myContext1, myContext3, 128);
    magnification(myContext1, myContext4, 64, 64);
    magnification(myContext1, myContext5, 0, 128);
    magnification(myContext1, myContext6, 128, 128);
}

function magnificationCenter() {
    magnification(myContext1, myContext2, 64, 64);
    magnification(myContext2, myContext3, 64, 64);
    magnification(myContext3, myContext4, 64, 64);
    magnification(myContext4, myContext5, 64, 64);
    magnification(myContext5, myContext6, 64, 64);
}

function reduction(baseContext = myContext1, endContext = myContext2, offsetx = 0, offsety = 0) {
    //doClear( );

    for (let xe = 0; xe < myWidth; xe += 2) { // (xe, ye) -> (255 - ye, xe)
        for (let ye = 0; ye < myHeight; ye += 2) {
            var pixel = baseContext.getImageData(xe + offsetx, ye + offsety, 1, 1);
            var DataIN = pixel.data;
            var r = DataIN[0];
            var g = DataIN[1];
            var b = DataIN[2];
            endContext.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + ")";
            endContext.fillRect(xe / 2, ye / 2, 1, 1);
            endContext.fillRect(xe / 2 + 128, ye / 2, 1, 1);
            endContext.fillRect(xe / 2, ye / 2 + 128, 1, 1);
            endContext.fillRect(xe / 2 + 128, ye / 2 + 128, 1, 1);

        }
    }
}

function reductionAll() {
    reduction(myContext1, myContext2);
    reduction(myContext2, myContext3);
    reduction(myContext3, myContext4);
    reduction(myContext4, myContext5);
    reduction(myContext5, myContext6);
}

