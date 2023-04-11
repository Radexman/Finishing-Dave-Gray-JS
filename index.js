// Web Storage API

// Not part of the DOM - refers to the Window API
// Avialable to JS via global variable: window

// We do not have to type window. It is implied:

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
	name: 'Emilia',
	hobbies: ['eat', 'sleep', 'code'],
	logName: function () {
		console.log(`Hi, my name is ${this.name}.`);
	},
};

localStorage.setItem('myLocalStore', JSON.stringify(myArray));
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem('myLocalStore'));
console.log(key);
