export const setIntervalN = (cb, time, repetitions) => {
    let x = 0
    const interval = setInterval(() => {
        cb()
        if(++x === repetitions) {
            clearInterval(interval)
        }
    }, time)
}