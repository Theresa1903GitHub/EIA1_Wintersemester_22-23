namespace A7{

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
let EUrelativzuEU : string = parseFloat(BevoelkerungEU2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
let EUWachstumsrate : string = parseFloat((BevoelkerungEU2022 - BevoelkerungEU2008) / BevoelkerungEU2008 * 100 + " %").toFixed(1);
let EUWachstum : string = parseFloat(BevoelkerungEU2022-BevoelkerungEU2008 + " Mio").toFixed(2);
let DErelativ : number = (BevoelkerungDE2022 / BevoelkerungEU2022) * 100;
let FRrelativ : number = (BevoelkerungFR2022 / BevoelkerungEU2022) * 100;
let ITrelativ : number = (BevoelkerungIT2022 / BevoelkerungEU2022) * 100;
let SPrelativ : number = (BevoelkerungSP2022 / BevoelkerungEU2022) * 100;
let EUrelativ : number = (BevoelkerungEU2022 / BevoelkerungEU2022) * 100;

const Einwohnerzahl = document.querySelector("#Einwohnerzahl")
const Relativ = document.querySelector("#Relativ")
const Wachstumsrate = document.querySelector("#Wachstumsrate")
const WachstumP = document.querySelector("#WachstumP")
const wo = document.querySelector("#wo")
const wo2 = document.querySelector("#wo2")
const Prozentzahl = document.querySelector('.chartWrapper .chart')


function Rechnung (Zahl1: number, Zahl2: string, Zahl3: string, Zahl4: string, Land: string) {
        Einwohnerzahl.innerHTML = Zahl1 + " Mio.";
        Relativ.innerHTML = Zahl2 + " %";
        Wachstumsrate.innerHTML = Zahl3 + " %";
        WachstumP.innerHTML = Zahl4 + " Mio.";
        wo.innerHTML = "Einwohnerzahl in " + Land;
        wo2.innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + Land + " in 2022";
    }
function Diagramm (Prozent: string) {
        Prozentzahl.setAttribute('style', Prozent)
}

const DEimg = document.querySelector("#Deutschland")
const Frimg = document.querySelector("#Frankreich")
const ITimg = document.querySelector("#Italien")
const SPimg = document.querySelector("#Spanien")
const EUimg = document.querySelector("#EU")

Frimg.addEventListener("click", function(){
    Rechnung (BevoelkerungFR2022, FRrelativzuEU, FRWachstumsrate, FRWachstum, "Frankreich")
    Frimg.setAttribute('style', 'opacity: 1')
    DEimg.setAttribute('style', 'opacity: 0,5')
    ITimg.setAttribute('style', 'opacity: 0,5')
    SPimg.setAttribute('style', 'opacity: 0,5')
    Diagramm ('height:' + FRrelativ + '%')})
DEimg.addEventListener("click", function(){
    Rechnung (BevoelkerungDE2022, DErelativzuEU, DEWachstumsrate, DEWachstum, "Deutschland")
    Frimg.setAttribute('style', 'opacity: 0,5')
    DEimg.setAttribute('style', 'opacity: 1')
    ITimg.setAttribute('style', 'opacity: 0,5')
    SPimg.setAttribute('style', 'opacity: 0,5')
    Diagramm ('height:' + DErelativ + '%')})
ITimg.addEventListener("click", function(){
    Rechnung (BevoelkerungIT2022, ITrelativzuEU, ITWachstumsrate, ITWachstum, "Italien")
    Frimg.setAttribute('style', 'opacity: 0,5')
    DEimg.setAttribute('style', 'opacity: 0,5')
    ITimg.setAttribute('style', 'opacity: 1')
    SPimg.setAttribute('style', 'opacity: 0,5')
    Diagramm ('height:' + ITrelativ + '%')})
SPimg.addEventListener("click", function(){
    Rechnung (BevoelkerungSP2022, SPrelativzuEU, SPWachstumsrate, SPWachstum, "Spanien")
    Frimg.setAttribute('style', 'opacity: 0,5')
    DEimg.setAttribute('style', 'opacity: 0,5')
    ITimg.setAttribute('style', 'opacity: 0,5')
    SPimg.setAttribute('style', 'opacity: 1')
    Diagramm ('height:' + SPrelativ + '%')})
EUimg.addEventListener("click", function(){
    Rechnung (BevoelkerungEU2022, EUrelativzuEU, EUWachstumsrate, EUWachstum, " der Europäischen Union")
    Frimg.setAttribute('style', 'opacity: 0,5')
    DEimg.setAttribute('style', 'opacity: 0,5')
    ITimg.setAttribute('style', 'opacity: 0,5')
    SPimg.setAttribute('style', 'opacity: 0,5')
    Diagramm ('height:' + EUrelativ + '%')})





}