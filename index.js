const colors = require("colors/safe");

let num1;
let num2;
let arr2 = [];
let count = 1;

if (!/^(0|[1-9]\d*)$/.test(Number(process.argv[2])) || !/^(0|[1-9]\d*)$/.test(Number(process.argv[3]))) {
    console.log(colors.red('ВВеденые данные не являются числами'));
} else {
    isNum();
}

function isNum(){
    if (Number(process.argv[2]) <= Number(process.argv[3])) {
        num1 = Number(process.argv[2]);
        num2 = Number(process.argv[3]);
    } else {
        num1 = Number(process.argv[3]);
        num2 = Number(process.argv[2]);
    }
    console.log('Ваши числа от ' + num1 + ' до ' + num2);

    function isPrime(num) {
        if(num < 2) return false;
        for (var i = 2; i < num; i++) {
            if(num % i == 0)
                return false;
        }
        arr2.push(num)
    }
    
    for (let i = num1; i < num2; i++){
        if(isPrime(i)) console.log(i);
    }

    if (arr2.length == 0){
        console.log(colors.red('В заданном диапозоне нет простых чисел'));
    } else {
        console.log('Простые числа:');
        arr2.forEach(e => {
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






