// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let skaicius;
while (true) {
  skaicius = Math.floor(Math.random() * 10) + 1;
  console.log(skaicius);
  if (skaicius === 5) {
    break;
  }
}
