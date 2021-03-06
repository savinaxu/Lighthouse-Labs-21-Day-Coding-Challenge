// ## Challenge #13
// Great job resetting the navigation system! You're off to a good start, and you'll surely be back in contact with Earth in no time!

// "Navigation system not calibrated! Three calibrations needed! QUAAACK!" There goes LARRY again, trying to help. Another browse through the nav system's documentation shows that each axis (x, y, and z) needs to be calibrated, and each requires a different calibration. Looks like you'll be writing plenty of JavaScript for this!

// To start, let's focus on calibrating just the x-axis. The x-axis has 12 possible settings and you'll need to write some code to find the right one. Start by writing a function called calibrateX(). There are a lot of steps involved in this one, luckily your manual has great documentation instructing that your function needs to:

// Loop from 1 - 12
// Call the built-in checkSignal() function each time, and assign the result to a variable called signal
// Make sure your signal variable is not undefined
// If the value is defined, set the navigation object's x property to that value
// Break out of the loop!
// Don't forget to call your calibrateX() function to activate it!

const calibrateX = () => {
    for (let i = 0; i < 12; i++) {
        let signal = checkSignal();
        if (signal) {
            navigation.x = signal;
            break;
        }
    }
};
calibrateX();