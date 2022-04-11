// var x = 3
// alert(x)                 // kberi 3

// var x = 15
// var y = 10
// var rezult = x + y
// alert(rezult)            // kberi 25

// var a = 20
// var b = 2
// var c = 1
// alert(a+b+c)             // kberi 23
// alert("1988"+a+b+c)      // kberi 1988 2021

// var str = "Hello"
// alert(str)                  // kberi Hello

// var str1 = "Hello"
// var str2 = " How are you?"
// var str3 = str1 + str2;
// alert(str3)                  // kberi Hello How are you?
// alert(str1 + str2)           // same thing


//-----------------------------------------------------------------------------------------------------


// var user1 = {
//     name: "Artur",
//     age: 30,
//     Admin: false
// };

// console.log(user1["name"]);
// console.log(user1["age"]);
// console.log(user1["Admin"]);


//grum enq string-i mej "name" ete grelu enq 2 banali
// var user2 = {
//     "name": "Artur",
//     "age" : 30,
//     "Admin": false
// }

// console.log(user2["name"]);
// console.log(user2["age"]);
// console.log(user2["Admin"]);

// var user3 = {
//     name: "Artur",
//     age: 30,
//     Admin: true
// }

// console.log(user3.name);
// console.log(user3.age);
// console.log(user3.Admin);

// var user4 = {
//     name: "Artur",
//     age: 30,
//     Admin: true
// }

// console.log(user4);         //berum a yst aybubeni, (admin , age , name)


//-------------------------------------------------------------------------------------------------------
// FOR - CIKL

// var user5 = {
//     name: "Artur",
//     age: 33,
//     Admin: true
// }

// for(var key in user5){
//     console.log(user5[key]);
// }




// var a = 10
// console.log(a);

// var a = 11
// console.log(a);

// let a = 10
// a = 20
// console.log(a);

// const a = 10
// a = 20
// console.log(a);

// let x = []
// x[0] = 5;
// x[1] = 10;
// alert(x)        // 5 , 10
// x[5]
// alert(x[5])     // undifined, qani vor heto kara stana arjeq

//----------------------------------------------------------------------------------------

// let x = {};
// x["age"] = 10;
// x["name"] = "Artur"
// x["surname"] = "Caturyan"
// // alert(x)            // kberi [object Object]
// // alert(x["age"])     // kberi 10
// // console.log(x);     // kberi age name surname

// x["address"] = {}                       // objecti mej nor object bacecinq address anunov
// x["address"]["city"] = "Erevan"         // x objecti address objecti mej:  city key - Erevan value
// x["address"]["hasce"] = "Shengavit"     // x objecti address objecti mej:  hasce key - Shengavit value
// console.log(x);


// let y = {
//     "age": 10,
//     "name": "Artur",
//     "surname": "Caturyan",
//     "address":{
//         "city": "Erevan",
//         "hasce": "Shengavit"
//     }
// }

// console.log(y);                     // same thing

//------------------------------------------------------------------------------------------

// var car = new Object();
// car.color = "Black";
// car.model = "Mercedes";
// console.log(typeof car);            // type-y object
// console.log(car.color);             // kberi Black
// console.log(typeof car.color);      // type-y string
// console.log(car);                   // kberi objectov log-um ham color: 'Black' ham model:'merc'


//----------------------------------------------------------------------------------------


// var car = {
//     color: "Black",
//     model: "Mercedes",
//     makeBeep: function(){               // funkcia
//         alert("beeeeeeeeeeeep");
//         console.log(this.color);        // this-y objecti meji color-y
//     }
// }

// // car.makeBeep()                          // kanchum enq funkcian
// car.maxSpeed = 100;
// console.log(car);                       // object-y kberi amen inchov
// console.log(car.maxSpeed);              // 100
// console.log(car.model);                 // Mercedes
// console.log(car.color);                 // black
// console.log(car instanceof Object);     // patkanum a Object-nerin? kberi true

// var car = {
//     color: prompt("Color"),
//     model: "Mercedes",
//     makeBeep: function(){
//         alert("Beeep")
//         console.log(this.color);
//     }
// }
// car.makeBeep();

// var car = {
//     color: "Black",
//     model: "Mercedes",
//     g() {                   //same thing as makeBeep: function(){}
//         alert(this.color)
//     }                       
// }

// car.g()                     // kanchum enq funkcian


// var car2 = {
//     color: "red",
//     f2: car.g               // kanchum enq car-i g funkcian veragrelov nuyn funkcian f2-in
// }
// car2.f2()

//-----------------------------------------------------------------------------------------

// var human = {
//     name: "Artur",
//     age: 33,
//     Name() {                                // grum enq ` ` -i mej
//         alert(`my name is ${this.name}`)    // ${this.name} kanchum a es objecti name-y
//     }
// }

// human.Name()

//----------------------------------------------------------------

// var x = {
//     age: 33,
//     "name name": "Artur"
// };
// x["name name"] = "Artury chi"
// alert(x["name name"])               // kberi Artury chi
// x.age = 20;
// alert(x.age)                        // kberi 20


//-----------------------------------------------------------------------------------------
// FOR - CIKL


// const book1 = {
//     title: "pap tagavor",
//     author: "Stepan Zoryan",
//     pubYear: 1988,
//     price: 12000
// }

// for (let key in book1) {
//     console.log(key + " : " + book1[key]);      // key = key, book1[key] = value
// }                                               // kstananq title : pap tagavor heto myus toxy



// let x = {                                //
//     name: "Artur",
//     age: 33,
//     address: {
//         city: "Erevan",
//         street: "Marash"
//     },
//     friends: [{                          //zangvac
//         name: "Armen"
//     },       
//     {
//     name: "Karen"
// }]

// }
// console.log(x);


//varjutyun------------------------------------------------------------------

// var a = 10;
// var b = 5;
// var c 

// a = a + b;
// b = a - b;
// a = a - b;

// a = b
// b = a+a

// c = a - 5
// a = c
// c = b + 5
// b = c

// c = a
// a = b
// b = c

// alert(""+a+b)

//--------------------------------------------------------------------------------

// var arr = {
//     arm: ["Կապույտ","Կարմիր","Կանաչ"],
//     ang: ["Blue","Red","Green"]
// }

// console.log(arr["arm"]);                // kberi Կապույտ, Կարմիր, Կանաչ
// console.log(arr["ang"][1]);             // kberi red

var obj = {
    Hayatstan: "Erevan",
    Russastan: "Moskva",
    Anglia: "London",
    Ukraina: "Kiev"
}

// for(var key in obj){
//     console.log(obj[key]);              // Erevan, Moskva, London, Kiev (irar tak amen mi log)
// }

// for(var key in obj){
//     console.log(key);                   // Hayastan, Russastan, Anglia, Ukraina
// }

// for (var key in obj){
//     console.log(obj[key] + " is the capital of " + key);
// } 

// var arr=["Hello"," World","!"];
// console.log(arr[0]);
// console.log(arr[0]+arr[1]+arr[2]);

// var str = arr[0]+arr[1]+arr[2]
// console.log(str);                       //same thing

// var arr = ["Marine ","Lilit ","Karine "]
// var str = arr[2]+arr[1]+arr[0]
// console.log(str);


// string-for dasum enq vaxy
