// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// workflow function

const getAllUserEmails = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const jsonData = await res.json();

	const userEmailArray = jsonData.map((user) => user.email);

	renderUserEmails(userEmailArray);
};

const renderUserEmails = (data) => {
	data.forEach((email) => {
		const p = document.createElement('p');
		p.classList.add('text-style');
		const pText = document.createTextNode(email);
		p.appendChild(pText);

		document.body.appendChild(p);
	});
};

getAllUserEmails();
