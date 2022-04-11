// var str = "Some string for text"
// console.log(str);

// var str1 = "Some "string" for text"         //syntax error
// console.log(str);

// var str2 = 'Some "string" for text'
// console.log(str2);                              // ok

// var str3 = "Some 'string' for text"
// console.log(str3);                              // ok

// var str4 = 'Some \'string\' for text'
// console.log(str4);

// var str5 = "Some \"string\" for text"               //  " / "-nshany qayli vrov ancnum a  toxum a grel "" sra mej ""
// console.log(str5);
// document.write(str5)

// var str6 = "Some string\n for text"                     // toxadardz, alerti u log-i jamanak
// console.log(str6);
// alert(str6)
// document.write(str6)                                    // chi ashxatum

// var str7 = "Some\n\n string\n for\n text"               // erku toxadardz
// console.log(str7);

// var str8 = "Some string\t for text"                         // \t-n bacat  ( 2 space)
// console.log(str8);

// var str9 = "Some string \n\t for text"
// console.log(str9);                                         // toxadarc u bacat

// var str9 = "Some string <br/\> for text"                    // toxadardz anelu hamar docwrite
// document.write(str9)

// var str10 = "Some string \\ \n\t for text"                      // 1 hat \- kberi 
// console.log(str10);

// var str10 = "Some string \\\\ \n\t for text"                      // 2 hat \\- kberi 
// console.log(str10);

// var str11 = "Some string for text"
// var str12 = "Some-string-for-text"
// var str13 = "SOME STRING FOR TEXT"

// console.log(str11.charAt(3));               // kberum a 3rd indexy, texti tesqov
// console.log(str11.substring(6,9));          // 6-ic sksi minchev 9
// console.log(str11.substr(6,9));             // 6-ic sksac 9 char grum a
// console.log(str11.slice(-6));               // verjic sksac, 6 char. 
// console.log(str11.slice(6,9));              // 6-ic sksi minchev 9
// console.log(str11.indexOf("s"));            // arajin "s"-y vor indexn a
// console.log(str11.lastIndexOf("t"));        // verjin "t"-n vor indexn a
// console.log(str11.split(" "));              // talis a zangvac, poxarinum a stringerov,
// console.log(str12.split("t"));              // "t"-i poxaren dnum a stringer 
// console.log(str11.split(" ").join(" \\"));  // some \string \for \text, .joiny sarqum a tox u avelacnum \\
// console.log(str11.replace(" ", "..."));     // menak arajin space-y poxarinum a ... - i
// console.log(str11.replace(/ /g,"..."));     // bolor space-ery poxarinum a ...-i
// console.log(str11.toUpperCase());           // sarqum a mecatar
// console.log(str13.toLowerCase());           // sarqum a poqratar


//-------------------------------------------------------------------------------------------
//                                    FOR


// for(i=1; i<=10; i=i+1){                 //i++ ( nuynn a voncor i = i+1)
//     console.log(i);                     // ktpi 1ic 10
// }

// for(i=10; i>0; i--){                      //i-- ( nuynn a voncor i = i-1)
//     console.log(i);                       // ktpi 10ic minchev 1 " > " shany ka 0 chi hasni
// }

//-----------------------------------------------------------------------------------------


// var i, j;
// for(i = 5; i >= 1; i--)                       // ete bavararum a mtnum a hajord for
// {
//     for(j = 1; j <= i; j++)                  // ete bavararec arajin for-y mtnum a stex
//     console.log(j);
//     console.log("---------------");
// }                                           // 1 2 3 4 5 ---- 1 2 3 4 ---- 1 2 3 ---- 1 2 --- 1 --


//----------------------------------------------------------------------------------------


// var x , y
// for (x = 10; x>= 1; x--){                       // mnum a 10 minchev mejiny chani prcni

//     for (y = x; y>= 1; y--)                     //y-y stacav 10, 10>=1 ( okay a)
//         console.log(x,y);                       // ktpi 10 , 10 heto kani -1
//         console.log('---------');               // henc hasni 1-i ktp 1 u --------- u durs kga
// }


//-------------------------------------------------------------------------------------

// var x, y;
// for(x = 5; x >= 1; x--)                       
// {
//     for(y = x; y >= 1; y--)
//     console.log(y)
//     console.log("-------");
// }


//------------------------------------------------------------------------------------


// var x, y;
// for (x = 1; x <= 5; x++) {

//     for (y = x; y >= 1; y--)
//     console.log(y);
//     console.log("-----");
// }


//-------------------------------------------------------------------------------------

// var x, y;
// for (x = 1; x <= 5; x++) 
// {
//     for (y = x; y >= 1; y--)
//     console.log(x);
//     console.log("----");
// }                                   // 1 // 2 2 // 3 3 3 // 4 4 4 4 // 5 5 5 5 5

