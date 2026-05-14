const startBalance = Number(prompt("Введіть початковий баланс на квартал (грн):"));
const amount_1 = Number(prompt("Дохід за 1-й місяць (грн):"));
const amount_2_usd = Number(prompt("Дохід за 2-й місяць (USD):"));
const amount_3_usd = Number(prompt("Дохід за 3-й місяць (USD):"));

const rate1 = 43.7;
const rate2 = rate1 + 1;
const rate3 = rate2 + 1;

const incomeTotal = amount_1 + (amount_2_usd * rate2) + (amount_3_usd * rate3);

const fixedMonthlyUah = 3500 + 4000;
const netflixUsd = 9.99;
const totalExpenses = (fixedMonthlyUah * 3) + (netflixUsd * rate1) + (netflixUsd * rate2) + (netflixUsd * rate3);

const totalTaxes = 4500 + (incomeTotal * 0.05);

const currentBalance = startBalance + incomeTotal - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses.toFixed(3)} грн`);
console.log(`Загальний дохід Максима за квартал становить ${incomeTotal} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${currentBalance.toFixed(3)} грн`);