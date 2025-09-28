// const moonData = [
//   {
//     title: "Dag 1: Nymåne",
//     text: "Månen er nesten usynlig. Den opplyste delen vokser fra 0%. Dette er starten på en ny lunasjon. Jordskinn kan gi et svakt lys, men månen er ellers usynlig. I mange kulturer markerer nymåne starten på en ny måned.",
//   },
//   {
//     title: "Dag 2: Nymåne",
//     text: "Månen begynner å vise en tynn voksende månesigd. Fra ca. 0% til 5% opplyst. Denne fasen kalles Waxing Crescent Moon. Høyre side av månen blir opplyst sett fra Norge.",
//   },
//   {
//     title: "Dag 3: Voksende månesigd",
//     text: "Den opplyste delen vokser gradvis. Fra ca. 5% til 15% opplyst. Månen står lavt på himmelen om kvelden. Terminatoren beveger seg sakte over måneskiva.",
//   },
//   {
//     title: "Dag 4: Voksende månesigd",
//     text: "Fra ca. 15% til 25% opplyst. Den høyre siden av månen blir tydeligere. Dette er fortsatt Waxing Crescent Moon-fasen.",
//   },
//   {
//     title: "Dag 5: Voksende månesigd",
//     text: "Fra ca. 25% til 35% opplyst. Den tynne månesigden blir lettere å se på kveldstid. Månen reflekterer mer lys fra sola.",
//   },
//   {
//     title: "Dag 6: Voksende månesigd",
//     text: "Fra ca. 35% til 45% opplyst. Månen begynner å nærme seg halvparten av lysstyrken ved første kvarter.",
//   },
//   {
//     title: "Dag 7: Halvmåne i første kvarter",
//     text: "Halve måneskiva er opplyst. Start på første kvarter. Månen står opp rundt midt på dagen og går ned midt på natten. Terminatoren går loddrett gjennom måneskiva.",
//   },
//   {
//     title: "Dag 8: Voksende måne",
//     text: "Fra ca. 50% til 60% opplyst. Månen vokser mot fullmåne. Denne fasen kalles Waxing Gibbous Moon.",
//   },
//   {
//     title: "Dag 9: Voksende måne",
//     text: "Fra ca. 60% til 70% opplyst. Høyre side av månen reflekterer mer sollys. Månen blir lysere på himmelen.",
//   },
//   {
//     title: "Dag 10: Voksende måne",
//     text: "Fra ca. 70% til 80% opplyst. Måneskiva nærmer seg full lysstyrke. Terminatoren beveger seg sakte mot venstre.",
//   },
//   {
//     title: "Dag 11: Voksende måne",
//     text: "Fra ca. 80% til 90% opplyst. Månen blir svært lys på kveldstid. Kan være synlig nesten hele natten.",
//   },
//   {
//     title: "Dag 12: Voksende måne",
//     text: "Fra ca. 90% til 98% opplyst. Bare små mørke områder på venstre kant. Fullmåne nærmer seg.",
//   },
//   {
//     title: "Dag 13: Fullmåne",
//     text: "Hele måneskiva er opplyst. Den mest spektakulære fasen. Kan være synlig hele natten. Avstand og posisjon kan variere, noen ganger kalt supermåne eller mikromåne.",
//   },
//   {
//     title: "Dag 14: Fullmåne",
//     text: "Fullmåne fortsetter. Opplyst del ca. 100%. Lyssterkt nattelys. Måneformørkelser kan skje kun ved fullmåne.",
//   },
//   {
//     title: "Dag 15: Fullmåne",
//     text: "Fullmåne nær toppen av lysstyrke. Månen reflekterer maksimalt sollys. Kan se blå måne om året.",
//   },
//   {
//     title: "Dag 16: Minkende måne",
//     text: "Fra ca. 98% til 90% opplyst. Opplyst del begynner å minke etter fullmåne. Høyre side fortsatt lys.",
//   },
//   {
//     title: "Dag 17: Minkende måne",
//     text: "Fra ca. 90% til 80% opplyst. Månen avtar gradvis. Kalles Waning Gibbous Moon.",
//   },
//   {
//     title: "Dag 18: Minkende måne",
//     text: "Fra ca. 80% til 70% opplyst. Lysstyrken reduseres, terminatoren beveger seg mot høyre.",
//   },
//   {
//     title: "Dag 19: Minkende måne",
//     text: "Fra ca. 70% til 60% opplyst. Månen blir tydelig mørkere på venstre side.",
//   },
//   {
//     title: "Dag 20: Halvmåne i siste kvarter",
//     text: "Halve måneskiva er opplyst. Start på siste kvarter. Synlig etter midnatt. Terminatoren går loddrett gjennom måneskiva.",
//   },
//   {
//     title: "Dag 21: Minkende månesigd",
//     text: "Fra ca. 50% til 40% opplyst. Venstre side av månen lysner. Opplyst del minker sakte.",
//   },
//   {
//     title: "Dag 22: Minkende månesigd",
//     text: "Fra ca. 40% til 30% opplyst. Månen blir svakere på himmelen. Lysstyrken minker gradvis.",
//   },
//   {
//     title: "Dag 23: Minkende månesigd",
//     text: "Fra ca. 30% til 20% opplyst. Kun en tynn venstre månesigd er synlig.",
//   },
//   {
//     title: "Dag 24: Minkende månesigd",
//     text: "Fra ca. 20% til 10% opplyst. Månesigden blir svært tynn. Nesten usynlig ved horisonten.",
//   },
//   {
//     title: "Dag 25: Minkende månesigd",
//     text: "Fra ca. 10% til 5% opplyst. Svak tynn sigd. Klar natt, jordskinn kan gi et svakt lys.",
//   },
//   {
//     title: "Dag 26: Minkende månesigd",
//     text: "Fra ca. 5% til 2% opplyst. Nesten usynlig. Venstre side fortsatt lys.",
//   },
//   {
//     title: "Dag 27: Minkende månesigd",
//     text: "Fra ca. 2% til 1% opplyst. Bare et svakt glimt synlig. Forberedelse til nymåne.",
//   },
//   {
//     title: "Dag 28: Nymåne",
//     text: "Månen er igjen nesten usynlig. Opplyst del 0%. Start på ny lunasjon. Jordskinn gir svak glød, ellers mørkt.",
//   },
// ];

// // 1) Beregner dagens månedag
// function getMoonDayIndex() {
//   const referenceNewMoon = new Date("2022-09-25T21:54:00Z");
//   const now = new Date();
//   const diffMs = now.getTime() - referenceNewMoon.getTime();
//   const diffDays = diffMs / (1000 * 60 * 60 * 24);
//   const synodicMonth = 29.53058867; 
//   let moonAge = diffDays % synodicMonth; 
//   if (moonAge < 0) moonAge += synodicMonth;
//   const index = Math.floor(moonAge); 
//   return Math.min(Math.max(index, 0), 27);
// }

// // 2) Setter startdag til dagens månefase
// let currentIndex = getMoonDayIndex();

// // 3) Hent HTML-elementene
// const moonImage = document.getElementById("moon-image");
// const moonTitle = document.getElementById("moon-title");
// const moonText = document.getElementById("moon-text");

// // 4) Oppdater funksjonen
// function updateMoon() {
//   moonImage.src = `images/dag-${currentIndex + 1}.png`;
//   moonTitle.textContent = moonData[currentIndex].title;
//   moonText.textContent = moonData[currentIndex].text;
// }

// // 5) Knappene
// document.getElementById("prev-btn").addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + moonData.length) % moonData.length;
//   updateMoon();
// });

// document.getElementById("today-btn").addEventListener("click", () => {
//   currentIndex = getMoonDayIndex(); // hopper til dagens månedag
//   updateMoon();
// });

// document.getElementById("next-btn").addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % moonData.length;
//   updateMoon();
// });

// updateMoon();
