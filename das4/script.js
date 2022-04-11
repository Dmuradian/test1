// var mystring = "some string"
// console.log(mystring)
// console.log(typeof mystring)  //cuyc a talis mer popoxakani arjeqi tesaky, cuyc kta string

// var number = 10
// console.log(number)
// console.log(typeof number)   // cuyc kta number

//---------------------------------------------------------------------------------------------------------

// var boolean = true
// console.log(boolean)
// console.log(typeof boolean)     //cuyc kta boolean

// var boolean = false
// console.log(Boolean)
// console.log(typeof boolean)     //cuyc kta boolean

//----------------------------------------------------------------------------------------------------------

// var mynull = null                   //false-i arjeq a, berum a himnakanum texti depqum
// console.log(mynull)                 //kberi null
// console.log(null)                   //kberi null
// console.log(typeof null)            //kberi OBJECT

// var myundefined = undefined
// console.log(myundefined)                //kberi undefined
// console.log(typeof myundefined)         //kberi undefined, ira type-y eli undefined a

//-------------------------------------------------------------------------------------------------------

// var obj = {name: "Artur"}              //banalin a u arjeqy
// console.log(obj)                        // { } object a
// console.log(typeof obj)                 //type object

// var arr = [1, 2, 3];                    //zangvac a
// console.log(arr);
// console.log(typeof arr);                //eli object a

//-------------------------------------------------------------------------------------------

// var fun = function () {}                //function grelu syntax
// console.log(fun)
// console.log(typeof fun);                //type function

//-------------------------------------------------------------------------------------------

// var regexp = /w+/g                      // "w+"-y uxxaki text a
// console.log(regexp);
// console.log(typeof regexp);             //type-y object a

//------------------------------------------------------------------------------------------

// var x = [1,2,3,4]
// console.log(x[1]);                      //kanchum enq x zangvaci 1-in indexy. Kberi 2

// var y = ["Lusine", "Marine", "Karine"]
// console.log(y[0]);                          //kberi Lusine
// console.log(y.length);                      //y zangavaci erkarutyuny, kberi 3

// var name = ["Artur","Vahagn","Karen"]           //name-y haskanum a vorpes 1 string "Artur,Vahagn,Karen"
// console.log(name[2])                            //kberi " t "
// console.log(name.length);                       //kberi " 18 "

//--------------------------------------------------------------------------------------------

// let x = 10;
// let y = "text";
// let f = x === y;                            //xist havasar e
// alert(f)                                    //kberi false. numbery havasar chi stringi uremn false


// let x = 10;
// let y = "text";
// let f = x !== y;                            //havasar chi
// alert(f)                                    //kberi TRUE. iranq irar havasar chen

// let x = 10;
// let y = "10";
// let f = x == y;                              // chi nayum typery havasar e
// alert(f)                                     //kberi true. chi nayum type-ery

//---------------------------------------------------------------------------------------------

// var x = 20;
// var y = 10;

// let f = x > y;
// alert(f);
// let f = x>=y;
// alert(f);
// alert("Barev Artur")
// alert(100)
// alert(4+5)
// alert("10+5= " +(10+5))

// var name = prompt("Գրիր քո անունը")
// alert("բարև" + name)
// document.write("Barev" + name)

// var x = +prompt("number")
// x = +x/
// alert(x+x)

//-----------------------------------------------------------------

// var x = [20,18, [8, [62,95]], [45,6,7],[9,10,[91,46]]]

// alert(x[3][1] + x[4][2][1] * x[3][0] + x[2]); 
            // 6          46          45      8,62,95
// alert(x[3][2] + x[4][2][0] * x[3][1] + x[2].length);
            // 7          91          6         2

//-----------------------------------------------------------------------


// let mystring = "something"
// let mynumber = 10;
// let myboolean = true;
// let mynull = null;
// let myundefined = undefined;
// console.log(mystring);
// console.log(typeof mystring)
// console.log(mynumber);
// console.log(typeof mynumber);
// console.log(myboolean);
// console.log(typeof myboolen);
// console.log(mynull);
// console.log(typeof mynull);
// console.log(myundefined);
// console.log(typeof myundefined);
// console.log("myString--", typeof mystring);
// console.log("myNumber--", typeof mynumber); 
// console.log("myBoolean--", typeof myboolean);
// console.log("myNull--", typeof mynull);
// console.log("myUndefined--", typeof myundefined);

// var c = 15;
// var d = 2;
// var res = c+d;
// console.log(res)            //anum a matematikakan gorcoxutyun


// var a = 10
// var b = 2
// var c = 5
// alert(a+b+c)             //     17
// alert("barev" +a+b+c)    //     barev1025   -- qani vor string+text a darnum a barev1025

// var arr = [20, "barev", 50, false, [50,60,70]]
// alert(arr[3])           //false
// alert(arr[4])           //50,60,70
// console.log(arr[4])     //kberi object array(3) 0:50 1:60 2:70
// alert(arr[4][2])        //70

// var arr = [20, "barev", 50, false, [50,["barev","vonc es", "hajox"],70]]

// alert(arr[4][1][1])         --> "Vonc es"

// var name = "Poxos"
// alert("Hello" + name)

var name = "artur"
var age = "30"
console.log("Im annun e " + name + " tariqs " + age)