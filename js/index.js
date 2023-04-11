// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 states: Pending, Resolved, Rejected

const myPromise = new Promise((resolve, reject) => {
	const error = false;

	if (!error) {
		resolve('Yes! Resolved the promise');
	} else {
		reject('No! Rejected the promise');
	}
});
