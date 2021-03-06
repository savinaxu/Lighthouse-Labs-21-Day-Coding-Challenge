// ## Challenge #19
// Wait a second! It looks like your message isn't making it all the way to Earth. Another look at the radio manual and you realize you must configure the radio before sending your broadcast. Write and call a function called configureBroadcast() which will get the broadcast to Earth.

// Your function will need to follow a precise order:

// set the frequency on the radio
// set the antenna to active
// send your announcement
// You've already written all the code to complete this challenge with a few minor tweaks you'll be phoning home in no time. Unfortunately this requires manual configuration, so you'll need to call your configureBroadcast() function to kick things off

// PS. Remember to disable your previous frequency, antenna and announcement function calls as they were out of order!

const configureBroadcast = () => {
    setFrequency();
    activateAntenna();
    sendBroadcast();
};
configureBroadcast();