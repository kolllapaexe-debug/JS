const grade = Number(prompt("grade"));
let result;

switch (grade) {
    case 12:
    case 11:
    case 10:
        result = "Відмінний результат";
        break;
    case 9:
    case 8:
    case 7:
        result = "Добрий результат";
        break;
    case 6:
    case 5:
    case 4:
        result = "Задовільний результат";
        break;
    case 3:
    case 2:
    case 1:
        result = "Потрібно покращити знання";
        break;
    default:
        result = "Некоректна оцінка";
}

console.log(result);
alert(result);