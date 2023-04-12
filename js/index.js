// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 steps: Pending, Resolve, Reject

const promise = new Promise((resolve, reject) => {
	let error = false;

	if (!error) {
		resolve('Success: Task compleated.');
	} else {
		reject('Error: Something went wrong.');
	}
});

console.log(promise);

promise.then((res) => res + 1).then((res) => console.log(res));
