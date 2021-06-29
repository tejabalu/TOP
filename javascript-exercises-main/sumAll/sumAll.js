const sumAll = function(a,b) {
    if (a<0 || b<0 || typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";        
    } else {
        let smallno, largeno;
        if (a>b) {
            largeno = a;
            smallno = b;
        } else {
            largeno = b;
            smallno = a;
        }
        sum = 0;
        for (i = 0; i <= (largeno - smallno); i++) {
            sum = sum + smallno + i;        
        }
        return sum;
    } 
};

module.exports = sumAll;
