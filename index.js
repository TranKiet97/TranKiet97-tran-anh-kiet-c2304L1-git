function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let array = [5, 1, 4, 2, 7];
sumArray(array);