var x;
var y;
var z;

x = 11;
y = 22;
z = 33;

alert(x+y+z)
alert(x*y-z)
alert((x*z)+y)


const list = ['text1',"text2",'text3',"text4","text5","text6"]
console.log(list);
const newlist = list.slice(1,5)
console.log(newlist);

const main = [2,4,6,8,10];
const one = main.slice(0,2)
const two = main.slice(2)
const three = [...one, 'some text', ...two];
const four = [...two, 'some text', ...one];

console.log(main);
console.log(three); 
console.log(four); 
