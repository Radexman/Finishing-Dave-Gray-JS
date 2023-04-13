// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// workflow function

// const getAllUserEmails = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const jsonData = await res.json();

// 	const userEmailArray = jsonData.map((user) => user.email);

// 	renderUserEmails(userEmailArray);
// };

// const renderUserEmails = (data) => {
// 	data.forEach((email) => {
// 		const p = document.createElement('p');
// 		p.classList.add('text-style');
// 		const pText = document.createTextNode(email);
// 		p.appendChild(pText);

// 		document.body.appendChild(p);
// 	});
// };

// getAllUserEmails();

// 2nd parameter of fetch is a object

// Abstract into functions

// Maybe from a form

// const getDadJoke = async () => {
// 	const res = await fetch('https://icanhazdadjoke.com', {
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	});
// 	const jsonDadJoke = await res.json();

// 	logJoke(jsonDadJoke.joke);
// };

// const logJoke = (joke) => console.log(joke);

// getDadJoke();

// const requestJoke = async (firstName, lastName) => {
// 	const res = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
// 	const jsonResponse = await res.json();

// 	console.log(jsonResponse.value);
// };

// requestJoke('Emilia', 'Kożuch');

const getDataFromForm = () => {
	const requestObject = {
		firstName: 'Brouce',
		lastName: 'Lee',
		categories: ['nerdy'],
	};

	return requestObject;
};

const buildRequestUrl = (requestData) => {
	return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
	const res = await fetch(url);
	const jsonRes = await res.json();

	const joke = jsonRes.value.joke;

	postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
	console.log(joke);
};

// Procedural "workflow funtion"
const processJokeRequest = async () => {
	const requestData = getDataFromForm();
	const requestURL = buildRequestUrl(requestData);
	await requestJoke(requestURL);
	console.log('Finished');
};

processJokeRequest();
