// Завдання 1
let result1 = "Числа від 1 до 10:\n";
for (let i = 1; i <= 10; i++) {
    result1 += i + " ";
}
alert(result1);


// Завдання 2
let n2 = parseInt(prompt("Завдання 2: Введіть число N для пошуку парних чисел:"));
let result2 = `Парні числа від 1 до ${n2}:\n`;
for (let i = 1; i <= n2; i++) {
    if (i % 2 === 0) {
        result2 += i + " ";
    }
}
alert(result2);






// Завдання 3
let n3 = parseInt(prompt("Завдання 3: Введіть число N для обчислення суми:"));
let sum3 = 0;
for (let i = 1; i <= n3; i++) {
    sum3 += i;
}
alert(`Сума чисел від 1 до ${n3} дорівнює: ${sum3}`);


// Завдання 4
let n4 = parseInt(prompt("Завдання 4: Введіть число N для зворотного відліку:"));
let result4 = `Зворотний відлік від ${n4} до 1:\n`;
for (let i = n4; i >= 1; i--) {
    result4 += i + " ";
}
alert(result4);


// Завдання 5
let n5 = parseInt(prompt("Завдання 5: Введіть число для таблиці множення:"));
let result5 = `Таблиця множення на ${n5}:\n`;
for (let i = 1; i <= 10; i++) {
    result5 += `${n5} x ${i} = ${n5 * i}\n`;
}
alert(result5);


// Завдання 6
let password6;
const correctPassword6 = "admin123";
do {
    password6 = prompt("Завдання 6: Введіть пароль: (admin123)");
    if (password6 !== correctPassword6) {
        alert("Неправильний пароль, спробуйте ще раз");
    }
} while (password6 !== correctPassword6);
alert("Пароль правильний!");

// Завдання 7
const correctPassword7 = "admin123";
let accessGranted = false;
for (let tries = 1; tries <= 3; tries++) {
    let password7 = prompt(`Завдання 7: Спроба ${tries} із 3. Введіть пароль:`);
    if (password7 === correctPassword7) {
        alert("Доступ дозволено");
        accessGranted = true;
        break;
    } else {
        alert("Неправильний пароль");
    }
}
if (!accessGranted) {
    alert("Доступ заблоковано");
}


// Завдання 8
let result8 = "Непарні числа від 1 до 20:\n";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    result8 += i + " ";
}
alert(result8);


// Завдання 9
let n9 = prompt("Завдання 9: Введіть число для підрахунку цифр:");
let count9 = 0;for (let i = 0; i < n9.length; i++) {
    if (!isNaN(n9[i]) && n9[i] !== " ") {
        count9++;
    }
}
alert(`Кількість цифр у числі ${n9}: ${count9}`);


// Завдання 10
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
alert("Завдання 10: Програма загадала число від 1 до 10. Спробуйте вгадати!");

while (true) {
    userGuess = parseInt(prompt("Ваш варіант:"));
    if (userGuess > secretNumber) {
        alert("Менше");
    } else if (userGuess < secretNumber) {
        alert("Більше");
    } else if (userGuess === secretNumber) {
        alert("Ви вгадали!");
        break;
    } else {
        alert("Будь ласка, введіть коректне число");
    }
}