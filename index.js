// JavaScript Event Listeners

// Syntax: addEventListener(event, function, useCapture)

document.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 'complete') {
		console.log('readyState: complete');
		initApp();
	}
});

const initApp = () => {
	const viewOne = document.querySelector('#view1');
	const viewTwo = document.querySelector('#view2');
	const viewThree = document.querySelector('#view3');
	const h2 = document.querySelector('h2');

	viewOne.addEventListener('click', (e) => {
		viewOne.style.backgroundColor = 'red';
	});

	viewTwo.addEventListener('click', (e) => {
		e.stopPropagation();
		e.target.style.backgroundColor = 'green';
	});

	viewThree.addEventListener('click', (e) => {
		e.stopPropagation();
		e.target.style.backgroundColor = 'purple';
	});

	h2.addEventListener('click', (e) => {
		e.target.textContent = 'Heading clicked';
	});
};
