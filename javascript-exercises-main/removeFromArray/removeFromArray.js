const removeFromArray = function(array, ...remove) {
    
    for (let i = 0; i < remove.length; i++) {
        delplace = array.indexOf(remove[i]);
        if (delplace != -1) {
            array.splice(delplace, 1);
        }
    }
    return array;
};

module.exports = removeFromArray;
