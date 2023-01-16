/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */
//var todosText: string[] =       ["Lorem" , "Ipsum" , "Dolor"];
//var todosChecked: boolean[] =    [true    , false   , false];

namespace A11 {


interface Frage {
    question: string;
    answers: [
        answer: string;
        correct: boolean;
    ]
    //correct: number;
}


let HTMLQuiz:Frage [] = [
    {
    question: "value",
    answers: [
        answer: "value",
        correct: true,
    ]
    }
];

const HTMLButton = document.getElementById('html-btn')
const CSSButton = document.getElementById('css-btn')
const TSButton = document.getElementById('ts-btn')
const mixedButton = document.getElementById('mixed-btn')
const grit = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

HTMLButton.addEventListener("click", startHTMLGame)

function startHTMLGame(){
    HTMLButton.classList.add('hide')
    CSSButton.classList.add('hide')
    TSButton.classList.add('hide')
    mixedButton.classList.add('hide')
    grit.classList.remove('hide')
    nextButton.classList.remove('hide')
}

let addButton = document.querySelector("#addButton");

addButton.addEventListener("click", function (){
if (inputDOMElement.value !=""){
    let Aufgabe = {
        name: inputDOMElement.value,
        checked: false};
    todos.unshift(Aufgabe);
}});




/**
 * Die Anwendung wird immer wieder auf die selben
 * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht 
 * jedes mal neu selektiert werden müssen, werden hier
 * Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
declare var Artyom: any;

/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function(): void {

    /**
     * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
     * in ihre Variablen gespeichert werden, um später auf sie 
     * zugreifen zu können
     */
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    

 /*   
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
*/

//const recognition = new SpeechRecognitionResult();
//recognition.interimResults = true;
//recognition.lang = 'de';

//recognition.addEventListener('result') 
    
//var recognition : HTMLElement

//window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
        
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *", "neue Aufgabe *"],
            smart: true,
            action: function(i: any, wildcard: string): void {
                    console.log("Neue Aufgabe wird erstellt: " + wildcard);
                    //function neueTask (){
                        //if (wildcard !=""){
                            //console.log("recognition")
                            let Aufgabe = {
                                name: wildcard,
                                checked: false};
                            //console.log("bin drin")
                            todos.unshift(Aufgabe);
                            //console.log("bin drin")
                            drawListToDOM ();
                            
                    //}
       // }
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
        
    //});
    
    
    




    /**
     * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
     * auf den AddToDo Button gesetzt werden.
     */
    addButtonDOMElement.addEventListener("click", addTodo);

    /**
     * Initial soll einmal die Liste an bereit definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
    drawListToDOM();
});

function drawListToDOM(): void {
    // alle todos erst einmal aus dem DOM löschen
    todosDOMElement.innerHTML = "";

    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    for (let index: number = 0; index < todos.length; index++) {

        /**
         * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen, 
         * die Objekt-Instansierung ist aber übersichtlicher)
         */
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        updateDone();

        /**
         * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
         * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
         * 
         * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
         * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
         * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
         * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
         * hier muss die Zeichenkette unterbrochen werden.
         */
        todo.innerHTML =  "<span class='check " + todos[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todos[index].name +
                            "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index);
            updateDone();
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
            // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
            deleteTodo(index);
            updateDone();            
        });

        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
    //updateDone();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = todos.length + " in total";
}


function updateDone(): void {
    if (todos.length == 0){
        openDOMElement.innerHTML = 0 + " open";
        doneDOMElement.innerHTML = 0 + " done";
    }
    else {
        let i=0
        for (let index=0; index < todos.length; index++)
            if (todos[index].checked == true){
                i++
            }
        let open:number = todos.length - i
        openDOMElement.innerHTML = open + " open";
        doneDOMElement.innerHTML = i + " done";
    }
   
}


/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo(): void {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird 
         * als neues Element in das ToDo-Array gepusht.
         * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
         * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
         * der Status "unchecked", hier false, gepusht.
         */

        todos.unshift();
        //todosText.push(inputDOMElement.value);
        //todosChecked.push(false);
        
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";

        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
}

/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index: number): void {

    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    todos[index].checked = !todos[index].checked;

    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}

/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index: number): void {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    todos.splice(index, 1);
    
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    drawListToDOM();
}




}