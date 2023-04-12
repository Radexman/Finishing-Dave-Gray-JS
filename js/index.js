// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 steps: Pending, Resolve, Reject

const users = fetch('https://jsonplaceholder.typicode.com/users');

// Pending
users
	.then((res) => res.json())
	.then((users) => {
		users.forEach((user) => {
			console.log(user.name);
		});
	});
