// Завдання 1
let userName = prompt("Введіть своє ім'я:");
alert("Привіт, " + userName + "!");

// Завдання 2
const currentYear = 2024; // Поточний рік
let birthYear = prompt("Введіть рік вашого народження:");
let age = currentYear - parseInt(birthYear);
alert("Вам " + age + " років.");

// Завдання 3
let sideLength = prompt("Введіть довжину сторони квадрата:");
let perimeter = 4 * parseFloat(sideLength);
alert("Периметр квадрата дорівнює " + perimeter);

// Завдання 4
let radius = prompt("Введіть радіус кола:");
let area = Math.PI * Math.pow(parseFloat(radius), 2);
alert("Площа кола дорівнює " + area);

// Завдання 5
let distance = prompt("Введіть відстань між містами в кілометрах:");
let time = prompt("За скільки годин ви хочете дістатися?");
let speed = parseFloat(distance) / parseFloat(time);
alert("Щоб встигнути вчасно, вам потрібно рухатися зі швидкістю " + speed + " км/год.");

// Завдання 6
const exchangeRate = 0.85; // Курс долара до євро
let dollars = prompt("Введіть суму в доларах:");
let euros = dollars * exchangeRate;
alert(dollars + " доларів дорівнюють " + euros + " євро.");

// Завдання 7
const flashDriveSizeGB = prompt("Введіть обсяг флешки у ГБ:");
const fileSizeMB = 820; // Розмір одного файлу у МБ
const filesCount = Math.floor(flashDriveSizeGB * 1024 / fileSizeMB); // Кількість файлів, які вмістяться
alert("На флешці обсягом " + flashDriveSizeGB + " ГБ вміститься " + filesCount + " файлів розміром 820 МБ.");

// Завдання 8
let walletAmount = prompt("Введіть суму грошей у гаманці:");
let chocolatePrice = prompt("Введіть вартість однієї шоколадки:");
let chocolatesBought = Math.floor(walletAmount / chocolatePrice);
let change = walletAmount % chocolatePrice;

alert("Ви можете купити " + chocolatesBought + " шоколадок. Здача: " + change + " грн.");

// Завдання 9
let threeDigitNumber = prompt("Введіть тризначне число:");
let reversedNumber = parseInt(threeDigitNumber.toString().split('').reverse().join(''));
alert("Паліндром числа " + threeDigitNumber + " - це " + reversedNumber);

// Завдання 10
let userNumber = prompt("Введіть ціле число:");
let result = (userNumber % 2 === 0) ? "парне" : "непарне";
alert("Введене число є " + result + ".");
