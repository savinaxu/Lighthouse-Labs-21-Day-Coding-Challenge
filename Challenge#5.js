// ## Challenge #5
// "BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

// You can re-use your code from before, but this time you should do what all good programmers do: modularize your code. Write a function called findModuleIndex() which will take in a name that you’re looking for, and return the index of that module in the availableModules array. Remember: it has to have the essential flag, too!

// Use your findModuleIndex function to find the "propulsion" module and then load it into the ship's system.

const findModuleIndex = name => {
    let index = 0
    for (let i = 0; i < availableModules.length; i++) {
        if (availableModules[i].name === name && availableModules[i].essential) {
            index = i
            break;
        }
    }
    return index
}

loadModule(findModuleIndex("propulsion"))