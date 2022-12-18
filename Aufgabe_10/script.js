var A10;
(function (A10) {
    window.addEventListener("load", function () {
        function tasksAnzahl() {
            document.getElementById("count").innerHTML = tasksNumber + " in total";
        }
        function addTask() {
            const newDiv = document.createElement("div");
            newDiv.className = "myClass";
            const Kreis = document.createElement("img");
            Kreis.className = "Checkbox";
            Kreis.setAttribute("src", "./images/u5.svg");
            Kreis.setAttribute("width", "30");
            Kreis.setAttribute("height", "30");
            const Haken = document.createElement("img");
            Haken.className = "Haken";
            Haken.setAttribute("src", "./images/u7.svg");
            Haken.setAttribute("width", "20");
            const Text = document.createElement("label");
            Text.innerHTML = enter.value;
            Text.setAttribute("width", "400");
            Text.setAttribute("height", "50");
            Text.className = "taskText";
            const Trash = document.createElement("img");
            Trash.setAttribute("src", "./images/u8.svg");
            Trash.setAttribute("width", "20");
            Trash.className = "Papierkorb";
            document.getElementById("toDoList").appendChild(newDiv);
            newDiv.appendChild(Kreis);
            //newDiv.appendChild(Haken);
            newDiv.appendChild(Text);
            //newDiv.appendChild(Trash);
            Kreis.addEventListener("click", function () {
                newDiv.appendChild(Haken);
            });
            Haken.addEventListener("click", function () {
                newDiv.removeChild(Haken);
            });
            newDiv.addEventListener("mouseenter", function () {
                newDiv.appendChild(Trash);
            });
            newDiv.addEventListener("mouseleave", function () {
                newDiv.removeChild(Trash);
            });
            function deleteTask(div) {
                newDiv.remove();
                tasksNumber--;
                tasksAnzahl();
            }
            Trash.addEventListener("click", function (event) {
                deleteTask(newDiv);
            });
            tasksNumber++;
            tasksAnzahl();
        }
        let enter = document.getElementById("inputText");
        let tasksNumber = 0;
        enter.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                addTask();
                enter.value = "";
            }
        });
    });
})(A10 || (A10 = {}));
//# sourceMappingURL=script.js.map