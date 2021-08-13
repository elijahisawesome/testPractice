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
    },
    caesar: function(incomingString, shiftAmt){
        shiftAmt ? shiftAmt : shiftAmt = -13;
        let newString = [];

        const capitalShift = function(num){
            
            return (circulize((num+shiftAmt)-65))+65;
        }
        const lowerShift = function(num){
            return (circulize((num+shiftAmt)-97))+97;
        }
        const circulize = function(val){
            if (val <0){
                return val+26
            }
            return val
        }

        for(let x = 0; x<incomingString.length; x++){
            let val = incomingString[x].charCodeAt(0);
            if(val>=97 && val<=122){
                newString[x] = String.fromCharCode(lowerShift(val));
            }
            else if (val>=65 && val<=90){
                newString[x] = String.fromCharCode(capitalShift(val));
            }
            else{
                newString[x] = String.fromCharCode(val);
            }
            
        }


        return newString.join('');
    },
    analyze: function(arr){
        const findAverage = function(){
            let total = arr.reduce((acc, current) => {acc+=current; console.log(acc);return acc});
            total = total/arr.length;
            return total;
        }

        const min = function(){
            return minHelper();
        }

        const max = function(){
            return maxHelper();
        }
        function maxHelper(){
            let val = arr[0];
            for(let x = 0; x<length(); x++){
                if(arr[x] > val){
                    val = arr[x];
                }
            }
            return val;
        }
        function minHelper(){
            let val = arr[0];
            for(let x = 0; x<length(); x++){
                if(arr[x] < val){
                    val = arr[x];
                }
            }
            return val;
        }

        const length = function(){
            return arr.length;
        }

        return{average: findAverage(), min:min(),max:max(),length:length()}
    }
}

module.exports = tester