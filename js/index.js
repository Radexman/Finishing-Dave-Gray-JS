// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 steps: Pending, Resolve, Reject

const promise = new Promise((resolve, reject) => {
	let error = true;

	if (!error) {
		resolve('Success: Task compleated.');
	} else {
		reject('Error: Something went wrong.');
	}
});

const myNextPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const error = false;

		if (!error) {
			resolve('Sucess!');
		} else {
			reject('Failure!');
		}
	}, 1500);
});

myNextPromise.then((res) => console.log(res)).catch((error) => console.log(error));
