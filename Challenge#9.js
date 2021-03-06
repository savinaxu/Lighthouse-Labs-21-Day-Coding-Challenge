// ## Challenge #9
// "QUAAAACK radio beacon not sending!" Now that LARRY is reset, he can't help but point out all the things wrong with the ship. The radio beacon is important - it’s the part of the ship that relays messages to Earth about your location and welfare. Resetting it is a two-stage process: first you need to set the message. The message needs to contain the current state of the navigation object.

// This is where you learn about something called JSON. JSON stands for JavaScript Object Notation, and it allows us to express an entire JS object as a string. There’s a built-in function in JavaScript that will take in an object and turn it into JSON. That function is JSON.stringify() - if you pass your object to that function as a parameter, it turns into a string.

// You need to write a function called setMessage(). This function should set the message property on the radio object to be the JSON version of the navigation object. Don't forget you need to call your setMessage() function.

//Day9
const setMessage = () => {
    radio.message = JSON.stringify(navigation)
}
setMessage()