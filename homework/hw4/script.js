// Mec / Poqr: a > b  ,  a < b.
// Mec / Poqr kam havasar: a >= b  ,  a <= b.
// Havasar e: a == b.
// Havasar che: a != b.


//-------------------------------------------------------------------------------------------------------------------

// let result = 5 > 4;
// alert( result );             //true


// var x = 10
// var y = 30

// alert(x + 40 - 20 === 30)    //true

// var a = "Bari or"
// var b = "Bari or"

// alert( a !=  b)            //false

// var a = "Bari or"
// var b = "bari or"

// alert( a !=  b)            //true. havasar che` qani vor b-i arajin tary poqratar e


// let a = "5000";
// let b = 5000;
// let resoult = a == b;                           
// alert(resoult)                                     //kberi true. qany vor typery havasar en

//------------------------------------------------------------------------------------------------------------------


// JS-y tarery hamematum a yst aybubeni dasavorvacutyan
// 1-y stugvum a arajin tary, heto 2rd heto 3rd....



// alert('b' > 'a')    //true A,B,C,D

// alert('c' < 'd')    //true 

// alert( 'AAA' > 'AA' );          // true
// alert( 'aaa' > 'AA');           //true
// alert( 'AAA' > 'AAA');          //false

// alert( 'Katu' > 'Kadu' );    // true
// alert( 'Сонный' > 'Сон' );   // true
// alert("ABCD" > "ABCE")       //false


//--------------------------------------------------------------------------------------------------------------------


var zangvac = [1, 2, 3, 4, [5,[6,7, 8],9]]
alert(zangvac[4][1][2])
console.log(zangvac)

// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5,6,7,8,9
// 4[0]: 5
// 4[1]: 6,7,8
// 4[1][0]: 6
// 4[1][1]: 7
// 4[1][2]: 8
// 4[2]: 9
