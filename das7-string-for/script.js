// var x , y
// for (x = 1; x<=5; x++){      

//     for (y=1; y<=x; y++)                    
//         document.write(y);                      
//         document.write('<br>');               
// }
//                                     1 12 123 1234 12345


// var x , y
// for (x = 5; x>= 1; x--){                       

//     for (y = x; y<= 5; y++)                    
//         document.write(y);                      
//         document.write('<br>');               
// }                                   // 5 45 345 2345 12345

//------------------------------------------------------------------------------------

// var x , y
// for (x = 1; x<= 5; x++){              // arajin indexy 1 verjiny 5                        
//     for (y = x; y>= 1; y--)           // y-y stacav x-i arjeqy, 1, 1 >= 1, tpec 1  u gumarec 1         
//         document.write(y);            // tox 2. x- darav 2, y stacav 2, 2>= 1, tpec 2, qani vor y-- a mi hatel tpec 1, 23toxy gumarec 1 (darav 3)          
//         document.write('<br>');       // tox 3. x- darav 3, y stacav 3, 3>= 1, tpec 3, tpec 2, tpec 1 23rd toxum eli gumarc 1 (darav 4)       
// }



// var x , y
// for ( x = 5; x>=1; x--){                // arajin index 5 verjiny 1
//     for( y = x; y <=5; y++)             // y-y stacav x-i arjeqy, 5, 5<=5, tpec 5 u hanec 1 (tox 31 x--)
//     document.write(y)                   // tox 2. x-y darav 4, y stacav 4, 4<=5, tpec 4, tpec 5, 
//     document.write("<br>")              
// }                                    

var x, y
for ( x = 1; x<=5; x++){
    for( y = x; y>=1; y--)
    document.write(x)
    document.write("<br>")
} 

var x, y
for (x = 1; x<10; x = x + 2){
    for(y = x; y<=9; y = y + 2)
    document.write(y)
    document.write("<br>")
}