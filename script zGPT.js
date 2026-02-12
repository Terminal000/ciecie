document.title = "Cięcie";

const pIleWozkow = document.querySelector(".ileWozkow");
const pIleJeszczeSztukLopatek = document.querySelector(".ileJeszczeSztukLopatek");
const pIlePatel = document.querySelector(".ilePatel");
const pIleJeszczeProfili = document.querySelector(".ileJeszczeProfili");

////////////////////////////////////////////////////////////
// 🔒 Bezpieczne pobieranie liczb (NIGDY nie zwróci NaN)

function getNumber(id, fallback = 0) {
  const el = document.getElementById(id);
  if (!el) return fallback;

  const val = el.value.trim();
  if (val === "") return fallback;

  const num = Number(val);
  return Number.isFinite(num) ? num : fallback;
}

////////////////////////////////////////////////////////////
// 🔤 Odmiana

function odmiana(liczba, forma1, forma234, formaReszta) {
  liczba = Math.abs(liczba);

  if (liczba === 1) return forma1;
  if (liczba % 100 >= 11 && liczba % 100 <= 14) return formaReszta;
  if ([2, 3, 4].includes(liczba % 10)) return forma234;

  return formaReszta;
}

////////////////////////////////////////////////////////////
// 🧮 Główne przeliczanie

function przelicz() {

  const ildoc = getNumber("ildoc");
  const ilenawozku = getNumber("ilenawozku", 1);
  const ilenapal = getNumber("ilenapal", 1);
  const ilciec = getNumber("ilciec", 1);
  const ilakt = getNumber("ilakt");

  const ilWozkow = Math.floor(ildoc / ilenawozku);
  const ilWozkowReszta = ildoc - (ilWozkow * ilenawozku);

  const ilPalet = Math.floor(ildoc / ilenapal);
  const ilPaletReszta = ildoc - (ilPalet * ilenapal);

  const ileJeszcze = Math.max(0, ildoc - ilakt);

  const ileJeszczeProfili = Math.floor(ileJeszcze / ilciec);
  const ileJeszczeProfiliReszta = ileJeszcze - (ileJeszczeProfili * ilciec);

  ////////////////////////////////////////////////////////////

  pIleWozkow.textContent =
    `${ilWozkow} ${odmiana(ilWozkow, "wozek", "wózki", "wózków")} i ` +
    `${ilWozkowReszta} ${odmiana(ilWozkowReszta, "łopatka", "łopatki", "łopatek")} reszty`;

  pIlePatel.textContent =
    `${ilPalet} ${odmiana(ilPalet, "paleta", "palety", "palet")} i ` +
    `${ilPaletReszta} ${odmiana(ilPaletReszta, "łopatka", "łopatki", "łopatek")} reszty`;

  pIleJeszczeSztukLopatek.textContent =
    `Pozostało do wycięcia: ${ileJeszcze} ` +
    odmiana(ileJeszcze, "łopatka", "łopatki", "łopatek");

  pIleJeszczeProfili.textContent =
    `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`;
}

////////////////////////////////////////////////////////////
// 🎧 Eventy

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz);
});

////////////////////////////////////////////////////////////
// 🔄 Pierwsze przeliczenie po załadowaniu

przelicz();
