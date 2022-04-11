// tnayin katarel nuynatip varjutyunner ev bacatrel logikan, zangvaci mej arandznacnel anunnery ev anvanumnery ogtagorcelov for
// objecti mej tal tarber gorcoxutyunner ev kachel yst masery log-ov naev katarel ogtagorcelov Key(for)   5 hat



// var obj = {
//     Argentina: "Buenos Aires",
//     Afghanistan: "Kabul",
//     Angola: "Luanda",
//     Australia: "Canberra",
//     Austria: "Vienna",
//     Bangladesh: "Dhaka"
// }

// alert(obj.Bangladesh) // Dhaka

// for (var key in obj) {
//     console.log(obj[key] + " is the capital of " + key);
// }



// var dog = {
//     Affenpinscher: "Ben",
//     AustralianTerrier: "Jessy",
//     Basenji: "Jacky",
//     BichonFrise: "Jason",
//     Dobermann: "Teddy",
//     Foxhound: "Dezzy"
// }

// for (var key in dog){
//     {console.log(key + " is the breed of the dog. Name of the dog is " + dog[key]);}
// }

// for (var key in dog){
//     document.write(key + " it's breed of the dog, name of the dog is " + dog[key] + ". Another dog is ")
// }



// var cat = {
//     Musya:{
//         name: "Musya",
//         breed: "American",
//         age: "3",
//         color: "Black"
//     },
//     Jecky:{
//         name: "Jacky",
//         breed: "Australian",
//         age: "1",
//         color: "white"
//     },
//     Anton:{
//         name: "Anton",
//         breed: "Outdoor",
//         age: "3",
//         color: "Gray"
//     }
// }

// for (var key in cat){
//     console.log("Name of your cat is " + key + " ,age is " + cat[key].age + " and color is " + cat[key].color);
// }



// let x = {
//     name: "David",
//     surname: "Muradian",
//     age: 23,
//     address: {
//         city: "Erevan",
//         street: "Shengavit"
//     }
// }

// alert(x.age)                    //kanchum enq age: 23-y
// alert(x.address.street)         //kanchum enq address street: "Shengavit"-y



// var user = {
//     name: prompt("Enter your name"),
//     age: prompt("Enter your age"),
//     city: "Erevan",
//     Name() {                                
//         alert(`Your name is ${this.name}` + ` ,you're ${this.age}` + " and you're from " + this.city)    // ${this.name} kanchum a es objecti name-y
//     }
// }

// user.Name()



// var user2 = {
//     name: "David",
//     surname: "Muradian",
//     age: 23,
//     education:{
//         school: "N18",
//         univ: {
//             member: "ANAU",
//             course: "3"
//         }
//     }
// }

// alert(user2)        // [object Object]
// console.log(user2.name + " is " + user2.age + ". He studing in " + user2.education.univ.course + " course");



// var user = {
//     "my name": "Davo",
//     "my surname": "Sargsian",
//     age: 20
// };
// console.log(user);                 //minchev popoxel

// x["my name"] = "David"  
// x["my surname"] = "Muradian"
// x.age = 23;

// console.log(user);                 //final



// var human = {
//     morf: "Male",
//     f() {                   
//         alert(this.morf)
//     }                       
// }

// human.f()                     // kanchum enq funkcian


// var human2 = {
//     morf: "Female",
//     f2: human.f               // kanchum enq human-i "f" funkcian veragrelov nuyn funkcian f2-in
// }
// human2.f2()