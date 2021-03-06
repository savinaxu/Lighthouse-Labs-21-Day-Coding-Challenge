// ## Challenge #3
// "QUACK QUACK QUACK QUACK QUACK QUACK QUACK", goes LARRY, his eyes still glowing red. He’s counting off each of the seven modules on the list - you must be on the right track! Now to find out how many of them are essential.

// Use your JavaScript skills to write a function called countEssential() which will count how many modules from the availableModules array have the essential flag set.

const countEssential = () => {
    let res = 0
    availableModules.forEach(module => {
        if (module.essential) res++
    })
    return res
}