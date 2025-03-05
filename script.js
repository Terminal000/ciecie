document.title ="Cięcie"
let pIleWozkow = document.querySelector(".ileWozkow");
let pIleJeszczeSztukLopatek = document.querySelector(".ileJeszczeSztukLopatek");
let pIlePatel= document.querySelector(".ilePatel");
let pIleTrzebaProfili = document.querySelector(".ileTrzebaProfili");
let pWymiary = document.querySelector(".wymiary");
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


  const IleWozobli = `${ilWozkow} wózki i ${ilWozkowReszta} łopatek reszty`
  const IlePaletobli = `${ilPalcal} palet i ${IlePaletreszta} łopatek reszty`
 // console.log(IleWozobli)
  pIleWozkow.textContent = IleWozobli
  pIlePatel.textContent = IlePaletobli
  pIleJeszczeSztukLopatek.textContent =`Pozostało do wycięcia:${ileJeszcze} łopatki`
  pWymiary .textContent = `Krótsza podstawa trapezu przekroju podłużnego profilu wynosi: ${podstawaGorna}`
// console.log(pIleWozkow)
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz);
})