// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const skaiciusA = 5;
const skaiciusB = 2;
palyginti(skaiciusA, skaiciusB);

function palyginti(a, b) {
  let rezultatas =
    a > b
      ? `${a} yra didesnis už ${b}`
      : a < b
      ? `${b} yra didesnis už ${a}`
      : `${a} ir ${b} yra lygūs`;
  console.log(rezultatas);
}
