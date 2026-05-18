const score = Number(prompt("score"));
const homeworkDone = prompt("homeworkDone (true/false)") === "true";
const finalTestPassed = prompt("finalTestPassed (true/false)") === "true";

let result;

if (score >= 70 && homeworkDone && finalTestPassed) {
    result = "Сертифікат успішно отримано";
} else {
    result = "Умови для отримання сертифіката не виконані";
}

console.log(result);
alert(result);