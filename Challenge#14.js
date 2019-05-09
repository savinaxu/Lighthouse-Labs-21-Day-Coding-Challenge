// ## Challenge #8
// The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.

// "COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent! Luckily, you've got the code for this. Load the module called "communication" using findModuleIndex() and loadModule() from before.

const findModuleIndex = name => {
    let index = 0
    for (let i = 0; i < availableModules.length; i++) {
        if (availableModules[i].name === name) {
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

loadModule(findModuleIndex("communication"))