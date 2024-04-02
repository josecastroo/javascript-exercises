const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let chain = "";
    for (let i = 0; i < num; i++) {
        chain += string;
    }
    return chain;
};

// Do not edit below this line
module.exports = repeatString;
