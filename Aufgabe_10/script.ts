namespace A10{

window.addEventListener("load", function(){

function tasksAnzahl(){
    document.getElementById("count").innerHTML = tasksNumber + " in total";
}

function addTask() {
    const newDiv = document.createElement("div");
    newDiv.className = "myClass";

    const Kreis: HTMLImageElement = document.createElement ("img");
    Kreis.className = "Checkbox";
    Kreis.setAttribute("src", "./images/u5.svg");
    Kreis.setAttribute("width", "30");
    Kreis.setAttribute("height", "30");

    const Haken: HTMLImageElement = document.createElement ("img");
    Haken.className = "Haken";
    Haken.setAttribute("src", "./images/u7.svg");
    Haken.setAttribute("width", "20");

    const Text: HTMLLabelElement = document.createElement("label");
    Text.innerHTML = enter.value;
    Text.setAttribute("width", "400")
    Text.setAttribute("height", "50")
    Text.className = "taskText";

    const Trash: HTMLImageElement = document.createElement("img");
    Trash.setAttribute("src", "./images/u8.svg");
    Trash.setAttribute("width", "20");
    Trash.className = "Papierkorb";
    
    document.getElementById("toDoList").appendChild(newDiv);
    newDiv.appendChild(Kreis);
    //newDiv.appendChild(Haken);
    newDiv.appendChild(Text);
    //newDiv.appendChild(Trash);

    Kreis.addEventListener("click", function(){
        newDiv.appendChild(Haken);
    })

    Haken.addEventListener("click", function(){
        newDiv.removeChild(Haken);
    })

    newDiv.addEventListener("mouseenter", function(){
        newDiv.appendChild(Trash)
    })

    newDiv.addEventListener("mouseleave", function(){
        newDiv.removeChild(Trash)
    })


    function deleteTask (div: HTMLDivElement) {
        newDiv.remove();

        tasksNumber--;
        tasksAnzahl();
    }
    Trash.addEventListener("click", function (event:MouseEvent){
        deleteTask(newDiv);
    });
    tasksNumber++;
    tasksAnzahl();
}


let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);
let tasksNumber: number = 0;

enter.addEventListener ("keypress", function(event: KeyboardEvent): void {
    if (event.key == "Enter") {
        addTask ();
        enter.value = "";
    }
});



});





}