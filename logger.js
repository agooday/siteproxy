let logStr = ''

let logSave = (addStr) => {
    if (process.env.localFlag === 'true') {
        console.log(`${addStr}`)
    }
    logStr += `${addStr}\n`
}
let logGet = () => {
    return logStr
}
let logClear = () => {
    logStr = ''
}

module.exports = {logSave, logGet, logClear}
