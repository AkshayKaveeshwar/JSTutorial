var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);
//output: Map(4) { 1 => 'Uno', 2 => 'dos', 3 => 'Tres', 4 => 'Cuatro' }

for (let key of myMap.keys()) {          //here we used "for of" loop
    console.log(`key is ${key}`);
}
//output: 
//key is 1
//key is 2
//key is 3
//key is 4

for (let value of myMap.values()) {           //here we used "for of" loop
    console.log(`value is ${value}`);
}
//output:
//value is Uno
//value is dos
//value is Tres
//value is Cuatro

//if we want both keys and values then below code will help you
for (let [key, value] of myMap) {                                     //here we used "for of" loop
    console.log(`key is ${key} and the value is ${value}`);
}
//output:
//key is 1 and the value is Uno
//key is 2 and the value is dos
//key is 3 and the value is Tres
//key is 4 and the value is Cuatro


myMap.forEach((v, k) => console.log(`key is ${v} and the value is ${k}`));  //here we used "forEach" loop

myMap.delete(2);
console.log(myMap);  //here deleted second value i.e, "dos"