function firstArr(arrOne) {
    return arrOne[0]
}

function allExcLast(arrYay) {
    return arrYay.slice(0, -1)
}

function lastUnicorn(lastUni) {
    return lastUni.slice(-1)
}

function notFirst(nodeFirst) {
    return nodeFirst.slice(1)
}

function eNte(arrayN, n) {
    if (n < 0 || n > arrayN.length) {
        return arrayN.slice(-1).toString()
    } else if (n >= 0 && n <= arrayN.length) {
        return arrayN[n]
    }
}

function specialRemove(arrayRem, removedWord) {
    return arrayRem = arrayRem.filter(item => item != removedWord)
}

function doubleStuff(arrDouble) {
    return arrDouble = arrDouble.filter((e, i) => arrDouble.indexOf(e) === i)
}

function sumArr(arrayssu) {
    return arrayssu.reduce((sum, i) => sum + i, 0)
}


function randomNum(min, max) {
    const a = Math.floor(Math.random() * (max - min + 1) + min)
    return a
}

function capitalString(string) {
    const b = string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
    return b
}

function uppercaseString(stringy) {
    return stringy.toUpperCase()
}

function paraCheck(p1, p2) {
    return (p1.slice(-1) === p2) ? true : false
}

module.exports = { firstArr, allExcLast, lastUnicorn, notFirst, eNte, specialRemove, doubleStuff, sumArr, randomNum, capitalString, uppercaseString, paraCheck }