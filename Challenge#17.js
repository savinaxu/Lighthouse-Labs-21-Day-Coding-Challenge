// ## Challenge #17
// "QUACK time to set the ship antenna to active." The ship has a pretty rich configuration object, with the power and modules and a nested object for the antenna's status.

// Write a function called activateAntenna() which will set the active property on the antenna to true. You’ve worked with object sub-properties before when you set the radio frequency (you can see the ship object in the Global Objects list above), remember how to access them?

// Your antenna is a bit out of date, so it doesn't activate automatically. Make sure to call your function to activate it!

//Day17
const activateAntenna = () => {
    ship.antenna.active = true;
};
activateAntenna();