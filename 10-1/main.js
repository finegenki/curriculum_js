let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
// 問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。
let num = 0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2 === 0){
        num = numbers[i];
        isEven(num);
    }
}

function isEven(num) {
    console.log(num + 'は偶数です');
}


class Car{
    constructor(gas, number) {
        this.gas = gas;
        this.number = number;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
    }
    
}

let sample = new Car('regular',9999);
sample.getNumGas();