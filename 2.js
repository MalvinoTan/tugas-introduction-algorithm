const cekLampu = (N) => {
    let count = 0;

    for (let i = 1; i <= N; i++) {
        if (N % i == 0) {
            count++;
        }
    }

    if (count % 2 == 0) return "lampu mati";
    else return "lampu menyala";
}

console.log(cekLampu(5));
console.log(cekLampu(4));