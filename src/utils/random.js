const getRandomInt = min => max => () => {
    return Math.floor(Math.random() * (max - min)) + min
}

export const randomBetween0and2 = getRandomInt(0)(3)