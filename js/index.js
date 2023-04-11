// Higher Order Functions

// A higher order functions is a function that does at least
// one of the following
// ** Tasks one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from './posts.js';

posts.forEach((post) => {
	console.log(post);
});

console.clear();

const filteredPosts = posts.filter((post) => {
	return post.id < 5;
});

console.log(filteredPosts);

const mapped = filteredPosts.map((post) => post.id * 15);

console.log(mapped);

const reducedPosts = mapped.reduce((acc, post) => acc + post);

console.log(reducedPosts);
