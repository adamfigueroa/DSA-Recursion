// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function stringReverser(str) {
    if(str.length === 0) {
        return reversedStr
    }
    let reversedStr = ''

    for (let i = 1; i <= str.length; i++) {
        reversedStr += str[str.length - i]
    }
    console.log(reversedStr)
}
stringReverser('hello')