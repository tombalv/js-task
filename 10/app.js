// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(numbers) {
  if (
    !Array.isArray(numbers) ||
    numbers.length !== 10 ||
    numbers.some((num) => typeof num !== "number" || !Number.isInteger(num))
  ) {
    return "Netinkamas numerio formatas";
  }

  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join("");

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(telefonoNumeris([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(telefonoNumeris("1234567890"));
