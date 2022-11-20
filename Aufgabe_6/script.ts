const BevoelkerungEU2008 : number = 438.73; 
let BevoelkerungEU2022 : number = 446.83;
const BevoelkerungDE2008 : number = 82.11;
let BevoelkerungDE2022 : number = 83.24;
const BevoelkerungFR2008 : number = 64.37;
let BevoelkerungFR2022 : number = 67.84;
const BevoelkerungIT2008 : number = 58.83;
let BevoelkerungIT2022 : number = 58.98;
const BevoelkerungSP2008 : number = 45.95;
let BevoelkerungSP2022 : number = 47.43;

let DErelativzuEU : string = parseFloat(BevoelkerungDE2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
let DEWachstumsrate : string = parseFloat((BevoelkerungDE2022 - BevoelkerungDE2008) / BevoelkerungDE2008 * 100 + " %").toFixed(1);
let DEWachstum : string = parseFloat(BevoelkerungDE2022-BevoelkerungDE2008 + " Mio").toFixed(2);
let FRrelativzuEU : string = parseFloat(BevoelkerungFR2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
let FRWachstumsrate : string = parseFloat((BevoelkerungFR2022 - BevoelkerungFR2008) / BevoelkerungFR2008 * 100 + " %").toFixed(1);
let FRWachstum : string = parseFloat(BevoelkerungFR2022-BevoelkerungFR2008 + " Mio").toFixed(2);
let ITrelativzuEU : string = parseFloat(BevoelkerungIT2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
let ITWachstumsrate : string = parseFloat((BevoelkerungIT2022 - BevoelkerungIT2008) / BevoelkerungIT2008 * 100 + " %").toFixed(1);
let ITWachstum : string = parseFloat(BevoelkerungIT2022-BevoelkerungIT2008 + " Mio").toFixed(2);
let SPrelativzuEU : string = parseFloat(BevoelkerungSP2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
let SPWachstumsrate : string = parseFloat((BevoelkerungSP2022 - BevoelkerungSP2008) / BevoelkerungSP2008 * 100 + " %").toFixed(1);
let SPWachstum : string = parseFloat(BevoelkerungSP2022-BevoelkerungSP2008 + " Mio").toFixed(2);

console.log("Deutschland")
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Deutschland in 2022 beträgt " + BevoelkerungDE2022 + " Mio.");
console.log("Relativ zur Gesamtzahl in der EU entspricht dies ca. " + DErelativzuEU + " %.");
console.log("Prozentual ist die Einwohnerzahl in Deutschland seit 2008 um ca. " + DEWachstumsrate + " % angestiegen.");
console.log("Dies entspricht einer Wachstumsrate von ungefähr " + DEWachstum + " Millionen Einwohner(inne)n.");
console.log(" ")
console.log("Frankreich")
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Frankreich in 2022 beträgt " + BevoelkerungFR2022 + " Mio.");
console.log("Relativ zur Gesamtzahl in der EU entspricht dies ca. " + FRrelativzuEU + " %.");
console.log("Prozentual ist die Einwohnerzahl in Frankreich seit 2008 um ca. " + FRWachstumsrate + " % angestiegen.");
console.log("Dies entspricht einer Wachstumsrate von ungefähr " + FRWachstum + " Millionen Einwohner(inne)n.");
console.log(" ")
console.log("Italien")
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Italien in 2022 beträgt " + BevoelkerungIT2022 + " Mio.");
console.log("Relativ zur Gesamtzahl in der EU entspricht dies ca. " + ITrelativzuEU + " %.");
console.log("Prozentual ist die Einwohnerzahl in Italien seit 2008 um ca. " + ITWachstumsrate + " % angestiegen.");
console.log("Dies entspricht einer Wachstumsrate von ungefähr " + ITWachstum + " Millionen Einwohner(inne)n.");
console.log(" ")
console.log("Spanien")
console.log("Die Gesamtzahl der Einwohnerinnen und Einwohner in Spanien in 2022 beträgt " + BevoelkerungSP2022 + " Mio.");
console.log("Relativ zur Gesamtzahl in der EU entspricht dies ca. " + SPrelativzuEU + " %.");
console.log("Prozentual ist die Einwohnerzahl in Spanien seit 2008 um ca. " + SPWachstumsrate + " % angestiegen.");
console.log("Dies entspricht einer Wachstumsrate von ungefähr " + SPWachstum + " Millionen Einwohner(inne)n.");