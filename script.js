"use strict"

var skaicius1, skaicius2, skaicius3, skaicius4, suma, sandauga;
skaicius1 = 1;
skaicius2 = 2;
skaicius3 = 3;
skaicius4 = 4;

suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

var temp;
temp = skaicius1
skaicius1 = skaicius2
skaicius2 = temp

var skaicius3, skaicius4
skaicius3 = skaicius3 ^ skaicius4
skaicius4 = skaicius3 ^ skaicius4
skaicius3 = skaicius3 ^ skaicius4

var maxSkaicius;
maxSkaicius = Number.MAX_VALUE

alert([skaicius1, skaicius2] = [skaicius2, skaicius1]);
alert([skaicius3, skaicius4] = [skaicius4, skaicius3]);


console.log("skaicius1", skaicius1)
console.log("skaicius2", skaicius2)
console.log("skaicius3", skaicius3)
console.log("skaicius4", skaicius4)
console.log("suma", suma) 
console.log("sandauga", sandauga)
console.log("maxSkaicius", maxSkaicius)