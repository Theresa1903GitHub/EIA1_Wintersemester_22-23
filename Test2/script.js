/*const Bild = document.getElementById('bild')

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
        
        artyom.addCommands({
            indexes: ["Hallo Felix *"],
            smart: true,
            action: function(i: any, wildcard: string): void {
                    console.log("Neue Aufgabe wird erstellt: " + wildcard);
                    Bild.classList.remove('hidden')
            }
        });
        
        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function(): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function(): void {
                        console.log("Ready!");
                    });
                },
                250);
        }
        
        startContinuousArtyom();
})
*/
//Zählt von 0 bis 9
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//Zählt von 0 bis 10
let y = 0;
while (y <= 10) {
    console.log(y);
    y++;
}
//Zählt von 10 bis 0
let x = 10;
while (x >= 0) {
    console.log(x);
    x--;
}
//Zählt von 10 bis 0
for (let z = 10; z >= 0; z--) {
    console.log(z);
}
//Aufgabe: Probeklausur 
let a;
while (a < 5) {
    a += a;
    console.log(a);
}
console.log(a);
//# sourceMappingURL=script.js.map