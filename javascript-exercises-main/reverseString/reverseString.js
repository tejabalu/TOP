const reverseString = function(string) {
    let arraystring = string.split("")
    let arraystringrev = []
    for (let i = 0; i < string.length; i++) {
        arraystringrev[i] = arraystring[string.length - i - 1];
    }
    revstr = arraystringrev.join("");
    return revstr;
};

module.exports = reverseString;
