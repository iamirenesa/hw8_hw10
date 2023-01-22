// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

let array = []
let userInput
do {
    userInput = prompt('Enter the number')
    array.push(Number(userInput))
} while (!isNaN(userInput) && userInput != null && !userInput.trim() == '')

array.pop()
console.log(array)

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
            [array[i], array[j]] = [array[j], array[i]]
        }
    }
}

console.log(array)

array.splice(1, 3)

console.log(array)