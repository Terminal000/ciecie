document.title ="Cięcie"
let pIleWozkow = document.querySelector(".ileWozkow");
let pIleJeszczeSztukLopatek = document.querySelector(".ileJeszczeSztukLopatek");
let pIlePatel= document.querySelector(".ilePatel");
let pIleTrzebaProfili = document.querySelector(".ileTrzebaProfili");
let pWymiary = document.querySelector(".wymiary");
let pIleJeszczeProfili = document.querySelector(".ileJeszczeProfili")

let pDeska= document.querySelector(".pdeska");
let pWysDeska= document.querySelector(".wysdeska");
function przelicz() {
  

  const dlugosc = parseFloat(document.getElementById("dlugosc").value);
  const wysokosc = parseFloat(document.getElementById("wysokosc").value);
  const kat = parseFloat(document.getElementById("kat").value);
  const ilciec = parseFloat(document.getElementById("ilciec").value);
  const ilenapal = parseFloat(document.getElementById("ilenapal").value);
  const ilenawozku = parseFloat(document.getElementById("ilenawozku").value);
  const ildoc = parseFloat(document.getElementById("ildoc").value);
  const ilakt = parseFloat(document.getElementById("ilakt").value) || 0;

  const ilWozkow = Math.floor(ildoc/ilenawozku);
  const ilPalcal= Math.floor(ildoc/ilenapal);
  const ilWozkowReszta = ildoc -(ilWozkow*ilenawozku)

  const podstawaGorna = (dlugosc - (2*wysokosc*(1/(Math.tan(kat*Math.PI/180))))).toFixed(1)

  const IlePaletreszta = ildoc-(ilPalcal*ilenapal);

  const ileJeszcze = ildoc- ilakt;
  const ileJeszczeProfili = Math.floor((ildoc-ilakt)/ilciec)
  const ileJeszczeProfiliReszta = -(ilciec*ileJeszczeProfili)+(ildoc-ilakt)

////funkcja końcówek

function odmiana(liczba, forma1, forma234, formaReszta){
  if(liczba==1) return forma1;
  if([2,3,4].includes(liczba % 10)) return forma234;
  if (liczba % 100 >=11 & liczba % 100 <=14) return formaReszta
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
  pIleJeszczeProfili.textContent = `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`
  pIleWozkow.textContent = IleWozobli
  pIlePatel.textContent = IlePaletobli
  pIleJeszczeSztukLopatek.textContent =`Pozostało do wycięcia: ${ileJeszcze} ${lopatkipoz}`
  pWymiary .textContent = `Krótsza podstawa trapezu przekroju podłużnego profilu wynosi: ${podstawaGorna}`
  console.log(ost)
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz);
})



////////////////////////////////////////////////////////

function przelicz2() {

  const ildoc = parseFloat(document.getElementById("ildoc").value);
  const rzedy = parseFloat(document.getElementById("rzedy").value);
  const wys1 = parseFloat(document.getElementById("wys2").value);

  const pCol = Math.floor(ildoc/rzedy);

  const pRzedyReszta = ildoc -(rzedy * pCol);

  pDeska.textContent = `${pCol} w kolumnie i ${pRzedyReszta} profili reszty`;
  pWysDeska.textContent = `Długość deski to ${15+(wys1 * pCol)} cm`;

  console.log(`${pCol} , ${pRzedyReszta} profili reszty`)

}


document.querySelectorAll(".deska").forEach(input => {
  input.addEventListener("input", przelicz2);
})