// ## Challenge #16
// "QUACK propulsion module needs to make us go!" LARRY points his bill at the ship’s command center, where the navigation system speed is set to "raaaaid".

// That clearly isn't correct - speed needs to be a positive integer.

// Write a function called setSpeed(speed) which will take in a string as a parameter, and set the speed in the navigation object (see globals above) to an integer.

// Luckily the propulsion module lets us know the speed it needs to be set at, so you don't need to call this function yourself

//Day16
const setSpeed = speed => {
    let integer = parseInt(speed);
    if (speed >= 0) {
      navigation.speed = integer
    }
};