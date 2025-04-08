document.title = "Cięcie"
let pIleWozkow = document.querySelector(".ileWozkow");
let pIleJeszczeSztukLopatek = document.querySelector(".ileJeszczeSztukLopatek");
let pIlePatel = document.querySelector(".ilePatel");
let pIleTrzebaProfili = document.querySelector(".ileTrzebaProfili");
let pWymiary = document.querySelector(".wymiary");
let pIleJeszczeProfili = document.querySelector(".ileJeszczeProfili")

let pDeska = document.querySelector(".pdeska");
let pWysDeska = document.querySelector(".wysdeska");
function przelicz() {


  const dlugosc = parseFloat(document.getElementById("dlugosc").value);
  const wysokosc = parseFloat(document.getElementById("wysokosc").value);
  const kat = parseFloat(document.getElementById("kat").value);
  const ilciec = parseFloat(document.getElementById("ilciec").value);
  const ilenapal = parseFloat(document.getElementById("ilenapal").value);
  const ilenawozku = parseFloat(document.getElementById("ilenawozku").value);
  const ildoc = parseFloat(document.getElementById("ildoc").value);
  //ilakt = (document.getElementById("ilakt").value).trim() || 0;

  const ilWozkow = Math.floor(ildoc / ilenawozku);
  const ilPalcal = Math.floor(ildoc / ilenapal);
  const ilWozkowReszta = ildoc - (ilWozkow * ilenawozku)

  //////niewiem co to robi
  // function isValidMathExpression(expr) {
  //   try {
  //     math.evaluate(expr); // sprawdzenie poprawności
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }

  // let dziIlAkt = 0;
  // if (ilakt !== "") {
  //   if (!isValidMathExpression(ilakt)) {
  //     return;
  //   }

  //   console.log(isValidMathExpression(ilakt))

  //   dziIlAkt = math.evaluate(ilakt);
  // }
  //////////////
  const podstawaGorna = (dlugosc - (2 * wysokosc * (1 / (Math.tan(kat * Math.PI / 180))))).toFixed(1)

  const IlePaletreszta = ildoc - (ilPalcal * ilenapal);

  const ileJeszcze = ildoc - ilakt;
  const ileJeszczeProfili = Math.floor((ildoc - ilakt) / ilciec)
  const ileJeszczeProfiliReszta = -(ilciec * ileJeszczeProfili) + (ildoc - ilakt)

  ////funkcja końcówek

  function odmiana(liczba, forma1, forma234, formaReszta) {
    if (liczba == 1) return forma1;
    if ([2, 3, 4].includes(liczba % 10)) return forma234;
    if (liczba % 100 >= 11 & liczba % 100 <= 14) return formaReszta
    return formaReszta
  }

  let wozki = odmiana(ilWozkow, "wozek", "wózki", "wózków")
  let lopatki = odmiana(ilWozkowReszta, "łopatka", "łopatki", "łopatek")
  let palety = odmiana(ilPalcal, "paleta", "palety", "palet")
  let lopatkireszta = odmiana(IlePaletreszta, "łopatka", "łopatki", "łopatek")
  let lopatkipoz = odmiana(ileJeszcze, "łopatka", "łopatki", "łopatek")


  const IleWozobli = `${ilWozkow} ${wozki} i ${ilWozkowReszta} ${lopatki} reszty`
  const IlePaletobli = `${ilPalcal} ${palety} i ${IlePaletreszta} ${lopatkireszta} reszty`
  // console.log(IleWozobli)'
  //pIleJeszczeProfili.textContent = `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`
  pIleWozkow.textContent = IleWozobli
  pIlePatel.textContent = IlePaletobli
  pIleJeszczeSztukLopatek.textContent = `Pozostało do wycięcia: ${ileJeszcze} ${lopatkipoz}`
  pWymiary.textContent = `Krótsza podstawa trapezu przekroju podłużnego profilu wynosi: ${podstawaGorna}`
  // console.log(ost)

}


function przelicz3() {

  const ilakt3 = (document.getElementById("ilakt").value).trim() || 0;
  const ildoc3 = parseFloat(document.getElementById("ildoc").value);
  const ilciec3 = parseFloat(document.getElementById("ilciec").value);




  function isValidMathExpression(expr) {
    try {
      math.evaluate(expr); // sprawdzenie poprawności
      return true;
    } catch {
      return false;
    }
  }

  let dziIlAkt = 0;
  if (ilakt3 !== "") {
    if (!isValidMathExpression(ilakt3)) {
      return;
    }

    console.log(isValidMathExpression(ilakt3))

    dziIlAkt = math.evaluate(ilakt3);
  }

  const ileJeszcze = ildoc3 - dziIlAkt;
  const ileJeszczeProfili = Math.floor((ildoc3 - dziIlAkt) / ilciec3)
  const ileJeszczeProfiliReszta = -(ilciec3 * ileJeszczeProfili) + (ildoc3 - dziIlAkt)

  pIleJeszczeProfili.textContent = `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`


 // pIleJeszczeProfili.textContent = `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`

  console.log(`Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`
)
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz);
})

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz3);
})



////////////////////////////////////////////////////////

function przelicz2() {

  const ildoc = parseFloat(document.getElementById("ildoc").value);
  const rzedy = parseFloat(document.getElementById("rzedy").value);
  const wys1 = parseFloat(document.getElementById("wys2").value);

  const pCol = Math.floor(ildoc / rzedy);

  const pRzedyReszta = ildoc - (rzedy * pCol);

  pDeska.textContent = `${pCol} w kolumnie i ${pRzedyReszta} profili reszty`;
  pWysDeska.textContent = `Długość deski to ${15 + (wys1 * pCol)} cm`;

  console.log(`${pCol} , ${pRzedyReszta} profili reszty`)

}


document.querySelectorAll(".deska").forEach(input => {
  input.addEventListener("input", przelicz2);
})