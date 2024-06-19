const fibonacci = function(pos) {
    let count;
    if (typeof pos !== 'number') {
        count = parseInt(pos);
    } else {
        count = pos;
    }
    if (count == 1 || count == 0) {
        return count;
    } else if (count < 0) {
        return "OOPS";
    } else {
        let fibo = [0, 1];
        for (let i = 2; i <= pos; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        } return fibo[count];
    }
};

// Do not edit below this line
module.exports = fibonacci;
