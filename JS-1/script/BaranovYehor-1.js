
const amountUsd = Number(prompt("Введіть суму оплати за проєкт у доларах:"));
const exchangeRate = 43.7;
const commissionRate = 0.005; // 0.5%

const totalUahBeforeCommission = amountUsd * exchangeRate;
const commissionUah = totalUahBeforeCommission * commissionRate;
const finalAmount = totalUahBeforeCommission - commissionUah;

console.log(`Після виконання проєкту, буде нараховано ${finalAmount.toFixed(2)} грн з урахуванням комісії банку!`);