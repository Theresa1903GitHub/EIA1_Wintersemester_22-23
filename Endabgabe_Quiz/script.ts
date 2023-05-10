namespace A1 {

//Um die Fragen als Objekt zu definieren wird hier ein entsprechendes Interface mit dem 
//entsprechenden Fragetext (question), einem Antworten-Array, dem Infotext und dem Link erstellt.
interface Frage {
    question: string;
    answers: Antwort [];
    info: string;
    link: string;
}

//Erstellung eines Antwort-Interfaces mit entsprechendem Antworttext und richttig/falsch-Angabe.
interface Antwort {
    text: string;
    correct: boolean;
}

//Erstellung der unterschiedlichen Fragen-Arrays (ein Array pro Quiztyp)
let HTMLQuiz:Frage [] = [
    {   question: "Was ist HTML?",
        answers: [  {text: "Auszeichnungssprache", correct: true},
                    {text: "Programmiersprache", correct: false},
                    {text: "Fremdsprache", correct: false},
                    {text: "Zeichensprache", correct: false},
                ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    {   question: "Was ist die aktuelle HTML-Version?",
        answers: [  {text: "3", correct: false},
                    {text: "4", correct: false},
                    {text: "5", correct: true},
                    {text: "6", correct: false},
                ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    {   question: "Was steht in der ersten Zeile eines HTML-Dokuments?",
        answers: [  {text: "head", correct: false},
                    {text: "body", correct: false},
                    {text: "!DOCTYPE", correct: true},
                    {text: "html", correct: false},
                 ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    {   question: "Was sind Block-Elemente?",
        answers: [  {text: "Elemente, die im Blocksatz formatiert werden", correct: false},
                    {text: "Elmente, die andere Tags blockieren", correct: false},
                    {text: "Elemente, die einen eigenen Absatz bilden", correct: true},
                    {text: "Elemente, die ein Rechteck erzeugen", correct: false},
                ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    {   question: "Mit welchem Tag kann man einen Link einfügen?",
        answers: [  {text: "<img>", correct: false},
                {text: "<link>", correct: false},
                {text: "<a>", correct: true},
                {text: "<h1>", correct: false},
             ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    {   question: "Welches ist kein semantisches Element?",
        answers: [  {text: "<article>", correct: false},
                {text: "<nav>", correct: false},
                {text: "<html>", correct: true},
                {text: "<footer>", correct: false},
             ],
        info: "Weitere Infos zu HTML findest du hier:",
        link: "<a href= https://www.w3schools.com/whatis/whatis_html.asp>HTML-Tutorial</a>"
    },
    

];

let CSSQuiz:Frage [] = [
    {   question: "Wofür steht CSS?",
        answers: [  {text: "Cascading Style Sheets", correct: true},
                    {text: "Creative Style Sheets", correct: false},
                    {text: "Colorful Style Sheets", correct: false},
                    {text: "Computer Style Sheets", correct: false},
                ],
        info: "Weitere Infos zu CSS findest du hier:",
        link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
    {   question: "Mit welchem Tag bindet man eine externe CSS-Datei ein?",
        answers: [  {text: "<style>", correct: true},
                    {text: "<link>", correct: false},
                    {text: "<css>", correct: false},
                    {text: "<a>", correct: false},
                ],
        info: "Weitere Infos zu CSS findest du hier:",
        link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
    {   question: "Wie wird der Außenabstand beim CSS-Box-Modell genannt?",
        answers: [  {text: "margin", correct: true},
                    {text: "padding", correct: false},
                    {text: "border", correct: false},
                    {text: "distance", correct: false},
                ],
        info: "Weitere Infos zu CSS findest du hier:",
        link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
    {   question: "Welches Zeichen steht für den Universalselektor?",
        answers: [  {text: "*", correct: true},
                    {text: "~", correct: false},
                    {text: "<all>", correct: false},
                    {text: "!", correct: false},
                ],
        info: "Weitere Infos zu CSS findest du hier:",
        link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
    {   question: "Welches Style-Attribut gibt es bei float nicht?",
        answers: [  {text: "both", correct: true},
                {text: "left", correct: false},
                {text: "right", correct: false},
                {text: "none", correct: false},
            ],
        info: "Weitere Infos zu CSS findest du hier:",
        link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
    {   question: "Was ist keine gültige Pseudoklasse?",
    answers: [  {text: ":live", correct: true},
                {text: ":visited", correct: false},
                {text: ":active", correct: false},
                {text: ":hover", correct: false},
            ],
    info: "Weitere Infos zu CSS findest du hier:",
    link: "<a href= https://www.w3schools.com/css/default.asp>CSS-Tutorial</a>"
    },
]
let TSQuiz:Frage [] = [
    {   question: "Wie wird eine externe TypeScript-Datei eingebunden?",
        answers: [  {text: "<script>", correct: true},
                    {text: "<link>", correct: false},
                    {text: "<type>", correct: false},
                    {text: "<style>", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
    {   question: "Welcher Datentyp speichert wahr/falsch-Aussagen?",
        answers: [  {text: "boolean", correct: true},
                    {text: "number", correct: false},
                    {text: "string", correct: false},
                    {text: "array", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
    {   question: "Wie kann man Zeichenketten verbinden?",
        answers: [  {text: "+", correct: true},
                    {text: "++", correct: false},
                    {text: "&", correct: false},
                    {text: "&&", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
    {   question: "Wodurch wird das erste Element aus einem Array gelöscht?",
        answers: [  {text: ".shift();", correct: true},
                    {text: ".unshift();", correct: false},
                    {text: ".pop();", correct: false},
                    {text: ".push();", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
    {   question: "Was ist der logische 'Oder'-Operator?",
        answers: [  {text: "||", correct: true},
                    {text: "--", correct: false},
                    {text: "!", correct: false},
                    {text: "&&", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
    {   question: "Wie wird das Fallback einer Switch-Case-Anweisung bezeichnet?",
        answers: [  {text: "default", correct: true},
                    {text: "rest", correct: false},
                    {text: "else", correct: false},
                    {text: "otherwise", correct: false},
                ],
        info: "Weitere Infos zu TypeScript findest du hier:",
        link: "<a href= https://lippke.li/typescript-tutorial-deutsch/>TypeScript-Tutorial</a>"
    },
]

//Random Nummern (zwischen 1 und 6) zur Auswahl der Fragen für das gemischte Quiz
let a:number = Math.floor(Math.random()*6)
let b:number = Math.floor(Math.random()*6)
let c:number = Math.floor(Math.random()*6)
let d:number = Math.floor(Math.random()*6)
let e:number = Math.floor(Math.random()*6)
let f:number = Math.floor(Math.random()*6)

//Erstellung des gemischten Arrays mit je 2 Fragen aus jedem Quiz
let MixedQuiz: Frage [] = [
    HTMLQuiz[a],
    HTMLQuiz[b],
    CSSQuiz[c],
    CSSQuiz[d],
    TSQuiz[e],
    TSQuiz[f],
]

//Ansprache der verschiedenen HTML-Elemente
const HTMLButton = document.getElementById('html-btn')
const CSSButton = document.getElementById('css-btn')
const TSButton = document.getElementById('ts-btn')
const mixedButton = document.getElementById('mixed-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const Start = document.getElementById('start')
const Info = document.getElementById('info')
const Infos = document.getElementById('infos')
const Infotext = document.getElementById('infotext')
const Link = document.getElementById('link')
const Ende = document.getElementById('winner')
const Ende2 = document.getElementById('winnerText')
const TryAgain = document.getElementById('again')
const br = document.getElementById('break')
const wrong = new Audio('./sounds/wrong.mp3')
const right = new Audio('./sounds/right.mp3')
const win = new Audio('./sounds/win.mp3')
const click = new Audio('./sounds/click.mp3')
let Punktgrenze = 0
let x = 0
let currentQuestionIndex
let falscheAntworten = 0

let Score: HTMLElement;
Score = document.querySelector("#score");

//EventListener, der bei Klick auf den Mixed-Button das entsprechende Quiz startet,
//die erste Frage inklusive Antwoten anzeigt und dann auf die Eingabe einer Antwort wartet.
mixedButton.addEventListener("click", function(){
    click.play();
    console.log(MixedQuiz);
    startGame(MixedQuiz);
    console.log(MixedQuiz.length);
    //Bei Klick auf den ersten Antwortbutton wird überprüft, 
    //ob diese eine Antwort mit dem "correct"-Wert "true" enthält.
    //Falls ja zählt der Counter nach oben und der "correct"-Screen wird eingeblendet.
    answer1.addEventListener("click", function(){
        if (MixedQuiz[currentQuestionIndex].answers[0].correct == true){
            updateCounter();
            correct();
        }
    //Falls nein wird der "wrong"-Screen eingeblendet, die Frage wird noch einmal ans Ende 
    //des entsprechenden Quiz-Arrays angefügt und zur Variable "falscheAntworten" wird 1 addiert
        else {
            wrongAnswer();
            MixedQuiz.push(MixedQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    //Das Ganze wird im Folgenden dementsprechend für alle Antwortbuttons durchgeführt
    answer2.addEventListener("click", function(){
        if (MixedQuiz[currentQuestionIndex].answers[1].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            MixedQuiz.push(MixedQuiz[currentQuestionIndex]);
            falscheAntworten++      
        }
    })
    answer3.addEventListener("click", function(){
        if (MixedQuiz[currentQuestionIndex].answers[2].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            MixedQuiz.push(MixedQuiz[currentQuestionIndex]);
            falscheAntworten++   
        }
    })
    answer4.addEventListener("click", function(){
        if (MixedQuiz[currentQuestionIndex].answers[3].correct == true){
            updateCounter();
            correct();
        }     
        else {
            wrongAnswer();
            MixedQuiz.push(MixedQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    //Bei Aufruf des Next-Buttons wird zunächst der Click-Sound abgespielt.
    //Der Next-Button und der entsprechende "Info-Screen" der vorhergehenden Frage wird ausgeblendet.
    //Die nächste Frage wird eingeblendet.
    nextButton.addEventListener("click", function(){
        click.play();
        currentQuestionIndex++
        resetState()
        showQuestion(MixedQuiz)
        clearStatusClass(answerButtonsElement);
        clearStatusClass(Info);
        Info.classList.add('hide');

        //Sobald die Punktegrenze erreicht wurde ist das Spiel gewonnen (Aufruf der winGame-Funktion).
        //Anschließend werden die Variablen x & Punktegrenze wieder resetet, in dem sie =0 gesetzt werden.
        if (Punktgrenze  == 1){
            winGame();  
            x = 0
            Punktgrenze  = 0
            }
        });
})

//Das Vorgehen wird im folgenden Code für die anderen Quiztypen entsprechend wiederholt.
//Hier zunächst für den TypeScript-Button und das entsprechende Qiuz.
TSButton.addEventListener("click", function(){
    click.play();
    console.log(TSQuiz);
    startGame(TSQuiz);
    console.log(TSQuiz.length);
    answer1.addEventListener("click", function(){
        if (TSQuiz[currentQuestionIndex].answers[0].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            TSQuiz.push(TSQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    answer2.addEventListener("click", function(){
        if (TSQuiz[currentQuestionIndex].answers[1].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            TSQuiz.push(TSQuiz[currentQuestionIndex]);
            falscheAntworten++        
        }
    })
    answer3.addEventListener("click", function(){
        if (TSQuiz[currentQuestionIndex].answers[2].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            TSQuiz.push(TSQuiz[currentQuestionIndex]);
            falscheAntworten++   
        }
    })
    answer4.addEventListener("click", function(){
        if (TSQuiz[currentQuestionIndex].answers[3].correct == true){
            updateCounter();
            correct();
        }     
        else {
            wrongAnswer();
            TSQuiz.push(TSQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    nextButton.addEventListener("click", function(){
        click.play();
        currentQuestionIndex++
        resetState()
        showQuestion(TSQuiz)
        clearStatusClass(answerButtonsElement);
        clearStatusClass(Info);
        Info.classList.add('hide');
        if (Punktgrenze  == 1){
            winGame();    
            x = 0
            Punktgrenze  = 0
            }
        });
})

//Das selbe Vorgehen für den CSS-Button/das CSS-Quiz.
CSSButton.addEventListener("click", function(){
    click.play();
    console.log(CSSQuiz);
    startGame(CSSQuiz);
    answer1.addEventListener("click", function(){
        if (CSSQuiz[currentQuestionIndex].answers[0].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            CSSQuiz.push(CSSQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    answer2.addEventListener("click", function(){
        if (CSSQuiz[currentQuestionIndex].answers[1].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            CSSQuiz.push(CSSQuiz[currentQuestionIndex]);
            falscheAntworten++      
        }
    })
    answer3.addEventListener("click", function(){
        if (CSSQuiz[currentQuestionIndex].answers[2].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            CSSQuiz.push(CSSQuiz[currentQuestionIndex]);
            falscheAntworten++   
        }
    })
    answer4.addEventListener("click", function(){
        if (CSSQuiz[currentQuestionIndex].answers[3].correct == true){
            updateCounter();
            correct();
        }     
        else {
            wrongAnswer();
            CSSQuiz.push(CSSQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    nextButton.addEventListener("click", function(){
        click.play();
        currentQuestionIndex++
        resetState()
        showQuestion(CSSQuiz)
        clearStatusClass(answerButtonsElement);
        clearStatusClass(Info);
        Info.classList.add('hide');
        if (Punktgrenze  == 1){
            winGame();  
            x = 0
            Punktgrenze  = 0
            }
        });
})

//Und hier noch einmal für den HTML-Button bzw. das HTML-Quiz.
HTMLButton.addEventListener("click", function(){
    click.play();
    startGame(HTMLQuiz);
    console.log(HTMLQuiz.length);
    answer1.addEventListener("click", function(){
        if (HTMLQuiz[currentQuestionIndex].answers[0].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            HTMLQuiz.push(HTMLQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    answer2.addEventListener("click", function(){
        if (HTMLQuiz[currentQuestionIndex].answers[1].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            HTMLQuiz.push(HTMLQuiz[currentQuestionIndex]);
            falscheAntworten++      
        }
    })
    answer3.addEventListener("click", function(){
        if (HTMLQuiz[currentQuestionIndex].answers[2].correct == true){
            updateCounter();
            correct();
        }
        else {
            wrongAnswer();
            HTMLQuiz.push(HTMLQuiz[currentQuestionIndex]);
            falscheAntworten++   
        }
    })
    answer4.addEventListener("click", function(){
        if (HTMLQuiz[currentQuestionIndex].answers[3].correct == true){
            updateCounter();
            correct();
        }     
        else {
            wrongAnswer();
            HTMLQuiz.push(HTMLQuiz[currentQuestionIndex]);
            falscheAntworten++
        }
    })
    nextButton.addEventListener("click", function(){
        click.play();
        currentQuestionIndex++
        resetState()
        showQuestion(HTMLQuiz)
        clearStatusClass(answerButtonsElement);
        clearStatusClass(Info);
        Info.classList.add('hide');
        if (Punktgrenze  == 1){
            winGame();
            x = 0
            Punktgrenze  = 0
            }
    })
})

//Diese Funktion startet das ausgewählte Quiz in dem 
//zuerst das entsprechene Quiz-Array resetet wird (Fragen-Duplikate werden gelöscht)
//Dann wird der Startscreen ausgeblendet, die Fragen des entsprechenden Quizes werden gemischt
//und der Frage+Antworten-Screen wird eingeblendet, während der Next-Button ausgeblendet wird.
//Mit showQuestion werden dann letztendlich die Arrayinhalte an den entspechenden Stellen dargestellt.
function startGame(QuizType){
    resetArrays(QuizType)
    Start.classList.add('hide');
    shuffleQuestions (QuizType); 
    console.log(QuizType);    
    questionContainerElement.classList.remove('hide');
    resetState();
    showQuestion(QuizType);
}

//Diese Funktion mischt die Antworten der "currentQuestion" (also der aktuellen Frage) durch
function mixAnswers (QuizType){
    QuizType[currentQuestionIndex].answers.sort(() => Math.random() - .5)
}

//Diese Funktion mischt die Fragen des entsprechenden Quiztypen durch
function shuffleQuestions (QuizType){
    QuizType.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
}

//Diese Funktion spielt denn "right"-Sound ab und blendet den Screen ein, 
//der textlich und farblich darstellt, dass die Frage richtig beantwortet wurde
function correct(){
    answerButtonsElement.classList.add('hide');
    Infos.innerText = "Yeah! That's right!"
    Info.classList.remove('hide');
    Info.classList.add('correct');
    nextButton.classList.remove('hide');
    right.play();
}

//Diese Funktion spielt denn "wrong"-Sound ab und blendet den Screen ein, 
//der textlich und farblich darstellt, dass die Frage falsch beantwortet wurde
function wrongAnswer(){
    answerButtonsElement.classList.add('hide');
    Info.classList.remove('hide');
    Info.classList.add('wrong');
    Infos.innerText = "Oops! That's not correct!";
    nextButton.classList.remove('hide');
    wrong.play();
}

//Diese Funktion spielt denn "win"-Sound ab und blendet den entsprechenden Endscreen ein
function winGame(){
    win.play();
    questionContainerElement.classList.add('hide')
    Ende.classList.remove('hide')
    Ende2.classList.remove('hide')
    TryAgain.classList.remove('hide')
    br.classList.remove('hide')
}

//Diese Funktion mischt zuerst über die externe Funktion "mixAnswers" die Antworten durch 
//und stellt die einzelnen Arrayinhalte dann an den entspechenden Stellen in HTML dar
function showQuestion(QuizType) {
    mixAnswers (QuizType)
    questionElement.innerText = QuizType[currentQuestionIndex].question
    answer1.innerText = QuizType[currentQuestionIndex].answers[0].text
    answer2.innerText = QuizType[currentQuestionIndex].answers[1].text
    answer3.innerText = QuizType[currentQuestionIndex].answers[2].text
    answer4.innerText = QuizType[currentQuestionIndex].answers[3].text
    Infotext.innerText = QuizType[currentQuestionIndex].info
    Link.innerHTML = QuizType[currentQuestionIndex].link
}
   
//Diese Funktion steuert den Counter, indem sie beim Aufruf immer 1 zu x addiert 
//und den Wert von x dann an entsprechender Stelle ausgibt
function updateCounter(): void {
    x = x + 1 
    Score.innerHTML = "" + x;
    if (x>=5){
        Punktgrenze = 1
        clearStatusClass(questionElement);
    }
}

//Diese Funktion macht den Next-Button unsichtbar
function resetState (){
    nextButton.classList.add('hide')
}

//Diese Funktion wird aufgerufen, sobald der TryAgain-Button geklickt wird.
//Sie refresht die Browserseite und kehrt damit zum Startscreen zurück.
TryAgain.addEventListener("click", function(){
    click.play();
    location.reload();
})

//Diese Funktion setzt die Quiz-Arrays auf die ursprüngliche Form zurück, in dem alle 
//vorab falsch beantworteten Fragen wieder (von hinten her) aus dem Array gelöscht werden 
function resetArrays (QuizType){
    while (QuizType.length > 6){
        QuizType.pop();
}}

//Diese Funktion setzt die verschiedenen Klassen, die bei 
//richtiger/falscher Antwort hinzugefügt werden wieder zurück
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
    element.classList.remove('hide')
    }

}