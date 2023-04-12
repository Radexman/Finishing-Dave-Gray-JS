// Fetch API requires a discussion of..
// Callbacks, Promises, Thenables and Async/Await

// Promises

// 3 steps: Pending, Resolve, Reject

// Async / Await

const myUser = {
	userList: [],
};

const myCoolFunction = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const jsonUserData = await response.json();
	return jsonUserData;
};

myCoolFunction();

const anotherFunction = async () => {
	const data = await myCoolFunction();
	console.log(data);
	return data;
};

anotherFunction();

const insertingUsers = async () => {
	const users = await anotherFunction();
	users.forEach((user) => {
		myUser.userList.push(user);
	});
	console.log(myUser.userList);
};

insertingUsers();
