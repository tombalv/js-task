// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(number) {
  if (typeof number !== "number" || !Number.isInteger(number) || number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(pirminisSkaicius(2));
console.log(pirminisSkaicius(10));
console.log(pirminisSkaicius(5));
console.log(pirminisSkaicius(29));
console.log(pirminisSkaicius(12));
