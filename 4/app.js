// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 0; i < 5; i++) {
  const randomSkaicius = Math.floor(Math.random() * 10) + 1;
  console.log(randomSkaicius);
}
