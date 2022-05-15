
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

//search method is used to search text from string and it will returns index value

console.log("hello friends this is for testing purpose".search("friends"));

//looks like it works same as the indexof method but there is some difference
//search method has no starting index parameter and we can use regex with search
//indexof method cant take regex expressions thst's all as defference

//includes method is used to check is text exist in string or not it will return boolean value

console.log("hello friends".includes("hello"));

//startswith method is used to check starting point of string

console.log("hello friends this is for testing purpose".startsWith("hello"));

//endswith mewthod is used to check ending point of string

console.log("hey buddy what's going on".endsWith("on"));

//back-ticks
//
//we can use back-ticks for multiple lines

let tmp = `hello
friends 
this is 
for 
testing 
purpose`;
console.log(tmp);

//we can use interpolation in back-ticks

console.log(`hello friends this is the text :${name}`);

//we can also do math operation in interpolation

console.log(`${12+2}`);

//Numbers

//without decimal number

console.log(12);

//with decimal number

console.log(12.12);

tmp = "100"+"100";

console.log(tmp);

//NaN if we perform math operation with other character instead of numbers then it will rteturns NaN

console.log(12*"apple");

//infinity when we perforn any kind of infinite operation then it will return Infinity
//and also when divide any value by zero it'll return Infinity

tmp = 12;

while(tmp != Infinity ){

	tmp = tmp * tmp;
	console.log(tmp);

}

console.log(12/0);

//hexadecimal we can store hex-dec value in variable

tmp = 0xFF;

console.log(tmp);

//tostring using it we can get value in base we wanted

tmp = 32;

console.log(tmp.toString(36));

//number object we can create number object

tmp = new Number(127);

console.log(tmp);


//tostring method is used to convert number to string

{

        let a = 12;

        let b = "data : ";

        b += a.toString();

        console.log(b);

}


//array

{
	
	let names = ["nik", "ron", "jimmy"];

	console.log(names[0]);
	console.log(names[1]);
	console.log(names[2]);

	//assign
	

	names[1] = "rocky";

	console.log(names[1]);

	//length
	
	console.log(names.length);

}

//instanceof is used check type of data


{

	let nums = [12,23,34,45,56];

	console.log(nums instanceof Array);

}

{

	//operators in javascript
	
	//arithmetic operators
	//in arith metic we have 1.addition 2.subtraction 3.multiplication 4.division 5.modulus 6.increment 7.decrement
	

	console.log(12+12);//addition

	console.log(12-6);//subtraction

	console.log(12*2);//multiplication

	console.log(12/2);//division

	console.log(12%2);//modulus

	let a = 12, b = 6;

	//++a prefix
	//a++ postfix
	
	//--b prefix
	//b-- postfix

	console.log((++a));//increment

	console.log((--b));//decrement
	
	
	//logical operators
	

	//== equal to operator
	
	console.log(12==12);//returns true if both values are same

	//!= not equal to operator
	
	console.log(12!=0);//return true of both values are not same

	//grater then operator
	
	console.log(12>6);//returns true if first value is greater then second value

	//less then operator
	
	console.log(12<25);//returns true if first value is less then second value

	//greater then or equal to operator
	
	console.log(12>=12);//returns true if first value is greater or equal to second value

	//less then or equal to operator
	
	console.log(12<=12);//returns true if first value is less or equal to second value




}


