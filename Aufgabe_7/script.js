var A7;
(function (A7) {
    const BevoelkerungEU2008 = 438.73;
    let BevoelkerungEU2022 = 446.83;
    const BevoelkerungDE2008 = 82.11;
    let BevoelkerungDE2022 = 83.24;
    const BevoelkerungFR2008 = 64.37;
    let BevoelkerungFR2022 = 67.84;
    const BevoelkerungIT2008 = 58.83;
    let BevoelkerungIT2022 = 58.98;
    const BevoelkerungSP2008 = 45.95;
    let BevoelkerungSP2022 = 47.43;
    let DErelativzuEU = parseFloat(BevoelkerungDE2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
    let DEWachstumsrate = parseFloat((BevoelkerungDE2022 - BevoelkerungDE2008) / BevoelkerungDE2008 * 100 + " %").toFixed(1);
    let DEWachstum = parseFloat(BevoelkerungDE2022 - BevoelkerungDE2008 + " Mio").toFixed(2);
    let FRrelativzuEU = parseFloat(BevoelkerungFR2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
    let FRWachstumsrate = parseFloat((BevoelkerungFR2022 - BevoelkerungFR2008) / BevoelkerungFR2008 * 100 + " %").toFixed(1);
    let FRWachstum = parseFloat(BevoelkerungFR2022 - BevoelkerungFR2008 + " Mio").toFixed(2);
    let ITrelativzuEU = parseFloat(BevoelkerungIT2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
    let ITWachstumsrate = parseFloat((BevoelkerungIT2022 - BevoelkerungIT2008) / BevoelkerungIT2008 * 100 + " %").toFixed(1);
    let ITWachstum = parseFloat(BevoelkerungIT2022 - BevoelkerungIT2008 + " Mio").toFixed(2);
    let SPrelativzuEU = parseFloat(BevoelkerungSP2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
    let SPWachstumsrate = parseFloat((BevoelkerungSP2022 - BevoelkerungSP2008) / BevoelkerungSP2008 * 100 + " %").toFixed(1);
    let SPWachstum = parseFloat(BevoelkerungSP2022 - BevoelkerungSP2008 + " Mio").toFixed(2);
    let EUrelativzuEU = parseFloat(BevoelkerungEU2022 / BevoelkerungEU2022 * 100 + " %").toFixed(0);
    let EUWachstumsrate = parseFloat((BevoelkerungEU2022 - BevoelkerungEU2008) / BevoelkerungEU2008 * 100 + " %").toFixed(1);
    let EUWachstum = parseFloat(BevoelkerungEU2022 - BevoelkerungEU2008 + " Mio").toFixed(2);
    let DErelativ = (BevoelkerungDE2022 / BevoelkerungEU2022) * 100;
    let FRrelativ = (BevoelkerungFR2022 / BevoelkerungEU2022) * 100;
    let ITrelativ = (BevoelkerungIT2022 / BevoelkerungEU2022) * 100;
    let SPrelativ = (BevoelkerungSP2022 / BevoelkerungEU2022) * 100;
    let EUrelativ = (BevoelkerungEU2022 / BevoelkerungEU2022) * 100;
    const Einwohnerzahl = document.querySelector("#Einwohnerzahl");
    const Relativ = document.querySelector("#Relativ");
    const Wachstumsrate = document.querySelector("#Wachstumsrate");
    const WachstumP = document.querySelector("#WachstumP");
    const wo = document.querySelector("#wo");
    const wo2 = document.querySelector("#wo2");
    const Prozentzahl = document.querySelector('.chartWrapper .chart');
    function Rechnung(Zahl1, Zahl2, Zahl3, Zahl4, Land) {
        Einwohnerzahl.innerHTML = Zahl1 + " Mio.";
        Relativ.innerHTML = Zahl2 + " %";
        Wachstumsrate.innerHTML = Zahl3 + " %";
        WachstumP.innerHTML = Zahl4 + " Mio.";
        wo.innerHTML = "Einwohnerzahl in " + Land;
        wo2.innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + Land + " in 2022";
    }
    function Diagramm(Prozent) {
        Prozentzahl.setAttribute('style', Prozent);
    }
    const DEimg = document.querySelector("#Deutschland");
    const Frimg = document.querySelector("#Frankreich");
    const ITimg = document.querySelector("#Italien");
    const SPimg = document.querySelector("#Spanien");
    const EUimg = document.querySelector("#EU");
    Frimg.addEventListener("click", function () {
        Rechnung(BevoelkerungFR2022, FRrelativzuEU, FRWachstumsrate, FRWachstum, "Frankreich");
        Frimg.setAttribute('style', 'opacity: 1');
        DEimg.setAttribute('style', 'opacity: 0,5');
        ITimg.setAttribute('style', 'opacity: 0,5');
        SPimg.setAttribute('style', 'opacity: 0,5');
        Diagramm('height:' + FRrelativ + '%');
    });
    DEimg.addEventListener("click", function () {
        Rechnung(BevoelkerungDE2022, DErelativzuEU, DEWachstumsrate, DEWachstum, "Deutschland");
        Frimg.setAttribute('style', 'opacity: 0,5');
        DEimg.setAttribute('style', 'opacity: 1');
        ITimg.setAttribute('style', 'opacity: 0,5');
        SPimg.setAttribute('style', 'opacity: 0,5');
        Diagramm('height:' + DErelativ + '%');
    });
    ITimg.addEventListener("click", function () {
        Rechnung(BevoelkerungIT2022, ITrelativzuEU, ITWachstumsrate, ITWachstum, "Italien");
        Frimg.setAttribute('style', 'opacity: 0,5');
        DEimg.setAttribute('style', 'opacity: 0,5');
        ITimg.setAttribute('style', 'opacity: 1');
        SPimg.setAttribute('style', 'opacity: 0,5');
        Diagramm('height:' + ITrelativ + '%');
    });
    SPimg.addEventListener("click", function () {
        Rechnung(BevoelkerungSP2022, SPrelativzuEU, SPWachstumsrate, SPWachstum, "Spanien");
        Frimg.setAttribute('style', 'opacity: 0,5');
        DEimg.setAttribute('style', 'opacity: 0,5');
        ITimg.setAttribute('style', 'opacity: 0,5');
        SPimg.setAttribute('style', 'opacity: 1');
        Diagramm('height:' + SPrelativ + '%');
    });
    EUimg.addEventListener("click", function () {
        Rechnung(BevoelkerungEU2022, EUrelativzuEU, EUWachstumsrate, EUWachstum, " der Europäischen Union");
        Frimg.setAttribute('style', 'opacity: 0,5');
        DEimg.setAttribute('style', 'opacity: 0,5');
        ITimg.setAttribute('style', 'opacity: 0,5');
        SPimg.setAttribute('style', 'opacity: 0,5');
        Diagramm('height:' + EUrelativ + '%');
    });
})(A7 || (A7 = {}));
//# sourceMappingURL=script.js.map