// Modules
import * as Guitars from './guitars.js';
import User from './user.js';

const me = new User('email.com', 'Emilia');
console.log(me);
console.log(me.greeting());

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
