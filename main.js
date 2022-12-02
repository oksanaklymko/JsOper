let a = 0.1;
let b = 0.2;
let c = "1";
let newC = Number(c);
let d = 2;
let flesh = prompt('який обсяг флешки?');
let newFlash = Number(flesh);
let file = 0.820;
let cash = prompt('сума грошей в гаманці?');
let newCash = Number(cash);
let chocoprice = prompt('ціна однієї шоколадки?');
let chocopriceNew = Number(chocoprice);
let deposit = prompt('сума вкладу на 2 місяці?');
let newDeposit = Number(deposit);
let interest = 5 / 12;
let e = 2;
let f = 0;
let g = 3;
if (e && f && g) {
    console.log(true);
}
if (e || f || g) {
    console.log(true);
}
if (e && f || g) {
    console.log(true);
}

console.log(a + b);
console.log(newC + d);
console.log(newFlash / file);
console.log(newCash / chocopriceNew);
console.log(newCash % chocopriceNew);
console.log(newDeposit * interest);
