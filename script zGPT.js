document.title = "Cięcie";

////////////////////////////////////////////////////////////
// 🔹 Pobranie elementów

const pIleWozkow = document.querySelector(".ileWozkow");
const pIleJeszczeSztukLopatek = document.querySelector(".ileJeszczeSztukLopatek");
const pIlePatel = document.querySelector(".ilePatel");
const pIleJeszczeProfili = document.querySelector(".ileJeszczeProfili");
const pWymiary = document.querySelector(".wymiary");

const pDeska = document.querySelector(".pdeska");
const pWysDeska = document.querySelector(".wysdeska");

////////////////////////////////////////////////////////////
// 🔒 Bezpieczne pobieranie liczby (nigdy nie zwróci NaN)

function getNumber(id, fallback = 0) {
  const el = document.getElementById(id);
  if (!el) return fallback;

  const val = el.value.trim();
  if (val === "") return fallback;

  const num = Number(val);
  return Number.isFinite(num) ? num : fallback;
}

////////////////////////////////////////////////////////////
// 🧮 Liczenie wyrażeń typu 750+200

function policzWyrazenie(text) {

  if (text.trim() === "") return 0;

  const dozwolone = /^[0-9+\-*/().\s]+$/;
  if (!dozwolone.test(text)) return 0;

  try {
    const wynik = Function(`"use strict"; return (${text})`)();
    return Number.isFinite(wynik) ? wynik : 0;
  } catch {
    return 0;
  }
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
// 🔹 Główne przeliczanie

function przelicz() {

  const dlugosc = getNumber("dlugosc");
  const wysokosc = getNumber("wysokosc");
  const kat = getNumber("kat");
  const ilciec = getNumber("ilciec", 1);
  const ilenapal = getNumber("ilenapal", 1);
  const ilenawozku = getNumber("ilenawozku", 1);
  const ildoc = getNumber("ildoc");

  const ilakt = policzWyrazenie(
    document.getElementById("ilakt")?.value || ""
  );

  ////////////////////////////////////////////////////////////
  // 🚚 Wózki

  const ilWozkow = Math.floor(ildoc / ilenawozku);
  const ilWozkowReszta = ildoc - (ilWozkow * ilenawozku);

  pIleWozkow.textContent =
    `${ilWozkow} ${odmiana(ilWozkow, "wozek", "wózki", "wózków")} i ` +
    `${ilWozkowReszta} ${odmiana(ilWozkowReszta, "łopatka", "łopatki", "łopatek")} reszty`;

  ////////////////////////////////////////////////////////////
  // 📦 Palety

  const ilPalet = Math.floor(ildoc / ilenapal);
  const ilPaletReszta = ildoc - (ilPalet * ilenapal);

  pIlePatel.textContent =
    `${ilPalet} ${odmiana(ilPalet, "paleta", "palety", "palet")} i ` +
    `${ilPaletReszta} ${odmiana(ilPaletReszta, "łopatka", "łopatki", "łopatek")} reszty`;

  ////////////////////////////////////////////////////////////
  // 🔪 Pozostało do wycięcia

  const ileJeszcze = Math.max(0, ildoc - ilakt);

  pIleJeszczeSztukLopatek.textContent =
    `Pozostało do wycięcia: ${ileJeszcze} ` +
    odmiana(ileJeszcze, "łopatka", "łopatki", "łopatek");

  ////////////////////////////////////////////////////////////
  // 🧱 Profile

  const ileJeszczeProfili = Math.floor(ileJeszcze / ilciec);
  const ileJeszczeProfiliReszta =
    ileJeszcze - (ileJeszczeProfili * ilciec);

  pIleJeszczeProfili.textContent =
    `Potrzeba jeszcze ${ileJeszczeProfili} całych profili i ${ileJeszczeProfiliReszta}`;

  ////////////////////////////////////////////////////////////
  // 📐 Wymiary trapezu

  if (dlugosc && wysokosc && kat) {
    const podstawaGorna =
      dlugosc - (2 * wysokosc * (1 / Math.tan(kat * Math.PI / 180)));

    pWymiary.textContent =
      `Krótsza podstawa trapezu: ${podstawaGorna.toFixed(1)}`;
  }

  ////////////////////////////////////////////////////////////
  // 🪵 Docinanie deski

  const rzedy = getNumber("rzedy", 1);
  const wys2 = getNumber("wys2");

  const pCol = Math.floor(ildoc / rzedy);
  const pRzedyReszta = ildoc - (rzedy * pCol);

  pDeska.textContent =
    `${pCol} w kolumnie i ${pRzedyReszta} profili reszty`;

  pWysDeska.textContent =
    `Długość deski: ${15 + (wys2 * pCol)} cm`;
}

////////////////////////////////////////////////////////////
// 🎧 Jeden wspólny event

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", przelicz);
});

////////////////////////////////////////////////////////////
// 🔄 Startowe przeliczenie

przelicz();
