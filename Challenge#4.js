// ## Challenge #4
// "DANGER QUACK DANGER QUACK!"

// LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, maybe you should start loading them into the ship's systems.

// Write a function called loadModule(). It needs to take a parameter, called index. Your function should be set up like this:

// function loadModule(index) { }

// When loadModule gets the index number of a module, it should load it into the ship's modules property (which is already an array). Before you load it in, set the enabled property to true. You need to loop over the availableModules and find the module called "life-support" and get its index, then use it to call loadModule().

// **Hint:** You need to either loop through availableModules outside of any function or write a seperate function that handles the looping make sure it is called in your code"

const findModule = () => {
    let index = 0
    for (let i = 0; i < availableModules.length; i++) {
        if (availableModules[i].name === "life-support") {
            index = i
            break;
        }
    }
    return index
}

const loadModule = index => {
    let target = availableModules[index]
    target.enabled = true
    ship.modules.push(target)
}

loadModule(findModule())