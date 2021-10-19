const colors = require("colors/safe");

let numMin;
let numMax;
let arr = [];
let count = 1;

if (!/^(0|[1-9]\d*)$/.test(Number(process.argv[2])) || !/^(0|[1-9]\d*)$/.test(Number(process.argv[3]))) {
    console.log(colors.red('Одно или оба значения не являются числами или имеют отрицательный знак'));
} else isNum();

function isNum(){
    if (Number(process.argv[2]) < Number(process.argv[3])) {
        numMin = Number(process.argv[2]);
        numMax = Number(process.argv[3]);
    } else {
        numMin = Number(process.argv[3]);
        numMax = Number(process.argv[2]);
    }
    console.log('Ваши числа от ' + numMin + ' до ' + numMax);

    function isPrime(num) {
        if(num < 2) return false;
        for (var i = 2; i < num; i++) {
            if(num % i == 0)
                return false;
        }
        arr.push(num)
    }
    
    for (let i = numMin; i <= numMax; i++){
        if(isPrime(i)) console.log(i);
    }

    if (arr.length == 0){
        console.log(colors.red('В заданном диапозоне нет простых чисел'));
    } else {
        console.log('Простые числа:');
        arr.forEach(e => {
            switch(count){
                case 1:
                    console.log(colors.green(e));
                    count++;
                    break;
                case 2:
                    console.log(colors.yellow(e));
                    count++;
                    break;
                case 3:
                    console.log(colors.red(e));
                    count = 1;
                    break;
            }
        });
    }
}






