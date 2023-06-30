// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const masyvas = Array.from({ length: 100 }, () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 4))
);

const skaiciuokle = masyvas.reduce(function (obj, raide) {
  obj[raide] = (obj[raide] || 0) + 1;
  return obj;
}, {});

console.log("Masyvas:", masyvas);
console.log("A raidžių skaičius:", skaiciuokle.A);
console.log("B raidžių skaičius:", skaiciuokle.B);
console.log("C raidžių skaičius:", skaiciuokle.C);
console.log("D raidžių skaičius:", skaiciuokle.D);
