//doStep01
function doStep01() {
	doClear( ); 
	for( let i = 0; i < myJSONdata.myText.length; i++ ) {
		var textLine = myJSONdata.myText[ i ].line; 
		for (let j = 0; j < textLine.length; j ++) { 
			let number = textLine.charCodeAt( j ); 
			console.log (' ->', textLine[ j ], number );
		}
	}
}

//doStep02
function doStep02() {
	doClear();
	for( let i = 0; i < myJSONdata.myText.length; i++ ) {
		let textLine = myJSONdata.myText[i].line;
		for( let j = 0; j < textLine.length; j ++ ) { 
			let number = textLine.charCodeAt ( j ); 
			console.log( ' ->', textLine[ j ], number, number.toString( 2 ) ); 
		}
	}
}

//doStep03
function doStep03( ) {
	doClear( ); 
	for( let i = 0; i < myJSONdata.myText.length; i++ ) { 
		let textLine = myJSONdata.myText[ i ].line; 
		for( let j = 0; j < textLine.length; j ++) { 
			let number = textLine.charCodeAt( j ); 
			console.log( ' ->', textLine[ j ], number, number.toString( 2 ).padStart( 8, '0' ) );
		}
	}
}

//doStep04
function doStep04() { 
	doClear( ); 
	for( let i = 0; i < myJSONdata.myText.length; i++) { 
		let textLine = myJSONdata.myText[ i ].line; 
		for( let j = 0; j < textLine.length; j ++) { 
			let number = textLine.charCodeAt( j ); 
			if (number > 255) { 
				console.log(' ->', textLine[ j ], number, 
				number.toString( 2 ).padStart( 16, '0' ), 
				number.toString( 2 ).padStart( 16, '0' ).substring( 7, 8 ),
				number.toString( 2 ).padStart( 16, '0' ).substring( 8, 11 ), 
				number.toString( 2 ).padStart( 16, '0' ).substring( 11, 13 ), 
				number.toString( 2 ).padStart( 16, '0' ).substring( 13, 16 ), );
			}else{ 
				console.log( ' ->', textLine[ j ], number,
				number.toString( 2 ).padStart( 8, '0' ),
				number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ),
				number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ),
				number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), );
			}
		}
	}
} 

//doStep05Preparation
function doStep05Preparation() { 
	doClear(); 
	for( let i = 0; i < myJSONdata.myText.length; i++) {
		let textLine = myJSONdata.myText[ i ].line; 
		for (let j = 0; j < textLine.length; j ++ ) { 
			let number = textLine.charCodeAt( j ); 
			if (number > 255) { 
				console.log( '=>', textLine[ j ], number, Math.trunc( number / 256 ), 
				Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ), 
				Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 
				Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 
				Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), '-->', 
				parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 ), 
				parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 ), 
				parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 ) ); 
				console.log( '==>', textLine[ j ], number, number % 256, 
				( number % 256 ).toString( 2 ).padStart( 8, '0' ), 
				( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 
				( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 
				( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), '-->',
				parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 ),
				parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 ),
				parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 ) );
			}
			else {
				console.log(' ->', textLine[ j ], number, 
				number.toString( 2 ).padStart( 8, '0' ), 
				number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 
				number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 
				number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), '-->', 
				parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 ), 
				parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 ),
				parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 ) );
			}
			number = 13; 
			console.log( ' *>', number, number.toString( 2 ).padStart( 8, '0' ),
			number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 
			number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 
			number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), '-->',
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 ),
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 ),
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 ) );
			number = 10; 
			console.log( ' *>', number, number.toString( 2 ).padStart( 8, '0' ),
			number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 
			number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 
			number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), '-->',
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 ),
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 ),
			parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 ) );
		}
	}
}

//doStep06Coding
function doStep06Coding() { 
	doClear();
	makeZeroingBits323( myContext1, myContext2);
		var myImageData = myContext2.getImageData( 0, 0, myWidth, myHeight ); 
		var myData = myImageData.data; 
		var byteNumber = -1, numberR, numberG, numberB; 
		for( let i = 0; i < myJSONdata.myText.length; i++) { 
			let textLine = myJSONdata.myText[ i ].line; 
			for (let j = 0; j < textLine.length; j ++ ) { 
				let number = textLine.charCodeAt( j ); 
				if( number > 255) { 
					numberR = parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 );
					numberG = parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 );
					numberB = parseInt( Math.trunc( number / 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 );
					byteNumber += 1; 
					myData[ 4 * byteNumber ] |= numberR; 
					myData[ 4 * byteNumber + 1 ] |= numberG; 
					myData[ 4 * byteNumber + 2 ] |= numberB; 
					numberR = parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 );
					numberG = parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 );
					numberB = parseInt( ( number % 256 ).toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 );byteNumber += 1;
					myData[ 4 * byteNumber ] |= numberR; 
					myData[ 4 * byteNumber + 1 ] |= numberG; 
					myData[ 4 * byteNumber + 2 ] |= numberB;
				}
				else {
					numberR = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 )
					numberG = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 )
					numberB = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 )
					byteNumber += 1; 
					myData[ 4 * byteNumber ] |= numberR; 
					myData[ 4 * byteNumber + 1 ] |= numberG; 
					myData[ 4 * byteNumber + 2 ] |= numberB;
				}
			}
			number = 13;
			numberR = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 )
			numberG = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 )
			numberB = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 )
			byteNumber += 1; 
			myData[ 4 * byteNumber ] |= numberR; 
			myData[ 4 * byteNumber + 1 ] |= numberG; 
			myData[ 4 * byteNumber + 2 ] |= numberB; 
			number = 10; 
			numberR = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 0, 3 ), 2 )
			numberG = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 3, 5 ), 2 )
			numberB = parseInt( number.toString( 2 ).padStart( 8, '0' ).substring( 5, 8 ), 2 )
			byteNumber += 1; 
			myData[ 4 * byteNumber ] |= numberR; 
			myData[ 4 * byteNumber + 1 ] |= numberG; 
			myData[ 4 * byteNumber + 2 ] |= numberB;
		}
		myContext3.putImageData( myImageData, 0, 0 ); 
		console.log( byteNumber );
	}

	function makeZeroingBits323(context1, context2){
		var myCoefficient = 256 / 16;
		var myImageDataIN = context1.getImageData(0,0,myWidth,myHeight);
		var myImageDataOUT = context1.getImageData(0,0,myWidth,myHeight);
		
		var myDataIN = myImageDataIN.data;
		var myDataOUT = myImageDataOUT.data;
		for (var i=0;i<myDataIN.length;i+=4){
			myDataOUT[i] = myCoefficient * (Math.floor(myDataIN[i]/myCoefficient)) + myCoefficient/2;
			myDataOUT[i+1] = myCoefficient * (Math.floor(myDataIN[i+1]/myCoefficient)) + myCoefficient/2;
			myDataOUT[i+2] = myCoefficient * (Math.floor(myDataIN[i+2]/myCoefficient)) + myCoefficient/2;
		}
		context2.putImageData(myImageDataOUT,0,0);
	}


//doStep07Decoding
function doStepO7Decoding() { 
	var myImageData = myContext3.getImageData( 0, 0, myWidth, myHeight ); 
	var myData = myImageData.data; 
	var myText = '', myLetterCode; 
	for (let byteNumber = 0; byteNumber < myData.length; byteNumber += 4) { 
		let numberR = myData[ byteNumber ] & 7; 
		let numberG = myData[ byteNumber + 1 ] & 3; 
		let numberB = myData[ byteNumber + 2 ] & 7; 
		myLetterCode = parseInt( numberR.toString( 2 ).padStart( 3, '0' ) + 
		numberG.toString( 2 ).padStart( 2, '0' ) + 
		numberB.toString( 2 ).padStart( 3, '0' ), 2 ); 
		if (myLetterCode > 1 ) { 
			myText += String.fromCharCode( myLetterCode ); 
		} 
		else { 
			byteNumber += 4; 
			let numberR = myData[ byteNumber ] & 7; 
			let numberG = myData[ byteNumber + 1 ] & 3; 
			let numberB = myData[ byteNumber + 2 ] & 7; 
			myLetterCode = parseInt( numberR.toString( 2 ).padStart( 3, '0' ) + 
			numberG.toString( 2 ).padStart( 2, '0' ) + 
			numberB.toString( 2 ).padStart( 3, '0' ), 2 ); 
			myText += String.fromCharCode( 256 + myLetterCode );
		}
	}
	console.log( myText );
}