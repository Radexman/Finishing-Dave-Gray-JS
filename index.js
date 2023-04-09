// JavaScript Event Listeners

const viewOne = document.querySelector('#view1');
const viewTwo = document.querySelector('#view2');
const viewThree = document.querySelector('#view3');
const h2 = document.querySelector('h2');

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
	alert('Doing something');
};

h2.addEventListener('click', doSomething, false);
h2.removeEventListener('click', doSomething, false);

h2.addEventListener('click', function (e) {
	console.log(e.target);
	e.target.textContent = 'Wow';
});
