const cekPrima = (N) => {

    if (N <= 1) return "Bukan Bilangan Prima";

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i == 0) return "Bukan Bilangan Prima";
    }

    return "Bilangan Prima";
}

console.log(cekPrima(3));
console.log(cekPrima(7));
console.log(cekPrima(10));