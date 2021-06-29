const repeatString = function(string, number) {
    let rtext = "";
    for (let i = 0; i < number; i++) {
        rtext = rtext + string;
    }
    return rtext;
};

module.exports = repeatString;
