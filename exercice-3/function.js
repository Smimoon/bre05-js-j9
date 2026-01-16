export function computeAverage(numbers) {
    let sum = 0;
    let div = 0;
    for(let number of numbers) {
        sum = sum + number;
        div++;
    }
    let average = sum/div;
    return average;
}