const usdRate = 43.7;
const income1 = Number(prompt("Введіть дохід за 1-й місяць (грн):"));
const income2Usd = Number(prompt("Введіть дохід за 2-й місяць (USD):"));
const income3Usd = Number(prompt("Введіть дохід за 3-й місяць (USD):"));

const incomeTotal = income1 + (income2Usd * usdRate) + (income3Usd * usdRate);

const tax5Percent = incomeTotal * 0.05;
const esc = 4500;
const totalToPay = tax5Percent + esc;

console.log(`Загальна сума доходу Максима складає ${incomeTotal} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalToPay} грн.`);