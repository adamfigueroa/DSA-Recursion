// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

function strSplitter(date, slash) {
    if (!date.includes(slash)) {
        return [date]
    }
    let slice = date.slice(0, date.indexOf(slash));
    let unsliced = date.substring(date.indexOf(slash) + 1, date.length);

    return [slice, ...strSplitter(unsliced, slash)];
    }
    

console.log(strSplitter('02/20/2020', '/'))