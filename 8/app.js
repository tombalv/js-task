// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(param1, param2) {
  if (
    (typeof param1 !== "number" && !Array.isArray(param1)) ||
    (typeof param2 !== "number" && !Array.isArray(param2))
  ) {
    return "Kintamieji netinkami";
  }

  const suma =
    (Array.isArray(param1) ? param1.length : param1) +
    (Array.isArray(param2) ? param2.length : param2);

  return suma % 2 === 1 ? "Suma nelyginė" : suma;
}

console.log(lygineSuma(4, 6));
console.log(lygineSuma(8, 0));
console.log(lygineSuma([4, 5, 10], [1, 2]));
console.log(lygineSuma([1, 1, 1], [1, 2]));
