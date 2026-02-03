// A callback function, the name of the function could be any name
callback = (n) => {
    return n ** 2;
}

// Function that takes another function as a callback
function cube(callback, n) {
    return callback(n) * n;
}

console.log(cube(callback,3));

function sayHello() {
    console.log('Hello');

}
// setInterval(sayHello, 3000); // after every 3 seconds, it will print 'Hello'

setTimeout(sayHello, 2000); // after 2 seconds, it will print 'Hello' just once