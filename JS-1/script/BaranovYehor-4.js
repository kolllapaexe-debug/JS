const income_1 = Number(prompt("Введіть дохід за 1-й квартал (грн):"));
const income_2 = Number(prompt("Введіть дохід за 2-й квартал (грн):"));
const income_3 = Number(prompt("Введіть дохід за 3-й квартал (грн):"));
const income_4 = Number(prompt("Введіть дохід за 4-й квартал (грн):"));

const TAX_RATE = 0.05;
const ESC_FIXED = 18000;
const BUSINESS_FUND = 100000;
const USD_RATE = 43.7;
const EUR_RATE = 51.2;
const SAVED_EUR = 2500;
const SAVED_USD = 3000;

const totalIncome = income_1 + income_2 + income_3 + income_4;

const unifiedTax = totalIncome * TAX_RATE;
const balanceAfterTaxes = totalIncome - unifiedTax - ESC_FIXED;

const fundBackAlive = balanceAfterTaxes * 0.10;
const fundChildrenHeroes = balanceAfterTaxes * 0.05;

const totalCurrencyUah = (SAVED_EUR * EUR_RATE) + (SAVED_USD * USD_RATE);

const finalBalance = balanceAfterTaxes - fundBackAlive - fundChildrenHeroes - BUSINESS_FUND - totalCurrencyUah;

console.log(`За рік Максим заробив — ${totalIncome} грн`);
console.log(`Єдиний податок 5% складає ${unifiedTax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${fundBackAlive} грн та ${fundChildrenHeroes} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${totalCurrencyUah} грн`);
console.log(`Залишок на рахунку Максима складає ${finalBalance} грн`);