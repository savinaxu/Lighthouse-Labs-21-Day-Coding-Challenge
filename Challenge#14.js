// ## Challenge #14
// "X Calibrated!" LARRY quacks happily. "Y and Z need calibration now! QUACK!"

// Let's write calibrateY() and calibrateZ(). The manual says you'll need to loop from 1 to 60, and again you have to call checkSignal() each time.

const calibrateY = () => {
    for (let i = 0; i < 60; i++) {
        let signal = checkSignal();
        if (signal) {
            navigation.y = signal;
            break;
        }
    }
};

const calibrateZ = () => {
    for (let i = 0; i < 60; i++) {
        let signal = checkSignal();
        if (signal) {
            navigation.z = signal;
            break;
        }
    }
};