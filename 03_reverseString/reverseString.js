const reverseString = function(string) {
    let arrString = string.split("");
    let reverseArr = arrString.reverse();
    let reverseString = "";

    for (let i = 0; i < reverseArr.length; i++) {
        reverseString += reverseArr[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
