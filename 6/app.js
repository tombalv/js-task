// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

const ilgis = Math.floor(Math.random() * 11) + 20;
const masyvas = Array.from(
  { length: ilgis },
  () => Math.floor(Math.random() * 21) + 10
);

const didziausiaReiksme = masyvas.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log("Masyvas:", masyvas);
console.log("Didžiausia reikšmė:", didziausiaReiksme);
