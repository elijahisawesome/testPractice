const tester ={
    capitalizer :   function(string){
        let newString = string[0].toUpperCase() + (string.slice(1))
        return newString;
    },

    reverser : function(string){
        let newString = [];
        let countUp = 0;
        for(let x = string.length-1; x>=0; x--){
            newString[countUp] = string[x];
            countUp++;
        }
        return newString.join('');
    },
    calculator: function(num1, num2, op){
        switch (op){
            case '+':
                return(parseInt(num1)+parseInt(num2));
            case '-':
                return(num1-num2);
            case '*':
                return(num1*num2);
            case '/':
                return(num1/num2);
            default:
                return('error');
        }
    }
}

module.exports = tester