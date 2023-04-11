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
	const nav = document.querySelector('.navbar');

	viewOne.addEventListener('click', (e) => {
		viewOne.classList.toggle('darkblue');
		viewOne.classList.toggle('purple');
	});

	viewTwo.addEventListener('click', (e) => {
		e.target.classList.toggle('black');
		e.target.classList.toggle('purple');
	});

	viewThree.addEventListener('click', (e) => {
		e.target.style.backgroundColor = 'purple';
	});

	h2.addEventListener('click', (e) => {
		const myText = e.target.textContent;
		myText === 'My 2nd view' ? (e.target.textContent = 'Clicked') : (e.target.textContent = 'My 2nd view');
	});

	nav.addEventListener('mouseover', (e) => {
		e.target.classList.add('height100');
	});

	nav.addEventListener('mouseout', (e) => {
		e.target.classList.remove('height100');
	});
};
