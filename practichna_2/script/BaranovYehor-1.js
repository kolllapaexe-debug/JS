const isAuthorized = prompt("isAuthorized (true/false)") === "true";
const internetSpeed = Number(prompt("internetSpeed"));
const isBanned = prompt("isBanned (true/false)") === "true";

let result;

if (isAuthorized && internetSpeed >= 20 && !isBanned) {
    result = "Доступ дозволено";
} else {
    result = "Доступ заборонено";
}

console.log(result);
alert(result);