
// javascript string

let name = "Hello mr.nikhil";

console.log(name);
console.log(name.length);

//slice method

console.log(name.slice(2,10));

//output "llo mr.n"

//sub-string
//it's almost same as the slice methode

console.log(name.substring(2,10));

//and output will be the same

//substr methode is works same
//but second parameter counts from start value which is first parameter

console.log(name.substr(2,8));

//replace

console.log(name.replace("nikhil","nikman"));

//it's just returns string after replacement not assigning into it.

console.log(name);

//we can do this to makllo mr.ne changes

name = name.replace("nikhil","nikman");

console.log(name);

//we can ignore case using regex.

console.log(name.replace("/NIKMAN/i","nikhil"));

//concat method for concatination

console.log(name.concat(" this is for testing purpose"));

//we can concatinate multiple strings too.

console.log(name.concat(" this is for"," testing purpose"));

//trim method
//which is basically removes spaces

console.log("       hello everyone      ".trim());

//padstart method which is used to add start paddings 

console.log("hello".padStart(4,"x"));

//padend method which is used to add end paddings

console.log("hello".padEnd(3,"*"));

//charat method is used to get character at position.

console.log(name.charAt(2));

//we can also use it.

console.log(name[2]);

//chatcodeat method is used to get character uni-code at position.

console.log(name.charCodeAt(2));

//split method is used to separate in to substring

console.log(name.split(""));//it will return character array

//in split method we have two parameters 
//1. separator to separate sub-string
//2. limit to set limit how much words we want.

console.log("hello friends this is for testing purpose".split(" ",3));//it will return three words

//indexof method is used to get index position of string

console.log("hello friends this for testing purpose".indexOf("friends"));

//lastindexof method is used to get last index position of specified text from string

console.log("Hello friends this is for testing purpose");



