const Bild = document.getElementById('bild');
window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["Hallo Felix *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            Bild.classList.remove('hidden');
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map