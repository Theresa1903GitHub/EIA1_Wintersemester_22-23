var A9neu;
(function (A9neu) {
    const C = document.querySelector("#C");
    const Db = document.querySelector("#Db");
    const D = document.querySelector("#D");
    const Eb = document.querySelector("#Eb");
    const E = document.querySelector("#E");
    const F = document.querySelector("#F");
    const Gb = document.querySelector("#Gb");
    const G = document.querySelector("#G");
    const Ab = document.querySelector("#Ab");
    const A = document.querySelector("#A");
    const Bb = document.querySelector("#Bb");
    const H = document.querySelector("#H");
    const sound1 = new Audio('./assets/Keyboard/a.mp3');
    const sound2 = new Audio('./assets/Keyboard/af.mp3');
    const sound3 = new Audio('./assets/Keyboard/b.mp3');
    const sound4 = new Audio('./assets/Keyboard/bf.mp3');
    const sound5 = new Audio('./assets/Keyboard/c.mp3');
    const sound6 = new Audio('./assets/Keyboard/d.mp3');
    const sound7 = new Audio('./assets/Keyboard/df.mp3');
    const sound8 = new Audio('./assets/Keyboard/e.mp3');
    const sound9 = new Audio('./assets/Keyboard/ef.mp3');
    const sound10 = new Audio('./assets/Keyboard/f.mp3');
    const sound11 = new Audio('./assets/Keyboard/g.mp3');
    const sound12 = new Audio('./assets/Keyboard/gf.mp3');
    function playSample(Klang) {
        Klang.play();
    }
    C.addEventListener("click", function () {
        playSample(sound5);
    });
    Db.addEventListener("click", function () {
        playSample(sound7);
    });
    D.addEventListener("click", function () {
        playSample(sound6);
    });
    Eb.addEventListener("click", function () {
        playSample(sound9);
    });
    E.addEventListener("click", function () {
        playSample(sound8);
    });
    F.addEventListener("click", function () {
        playSample(sound10);
    });
    Gb.addEventListener("click", function () {
        playSample(sound12);
    });
    G.addEventListener("click", function () {
        playSample(sound11);
    });
    Ab.addEventListener("click", function () {
        playSample(sound2);
    });
    A.addEventListener("click", function () {
        playSample(sound1);
    });
    Bb.addEventListener("click", function () {
        playSample(sound4);
    });
    H.addEventListener("click", function () {
        playSample(sound3);
    });
    const Tonfolge = [sound5, sound7, sound6, sound9, sound8, sound10, sound12, sound11, sound2, sound1, sound4, sound3];
    const neueTonfolge = [sound5, sound7, sound6, sound9, sound8];
    const Aufnahme = [];
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    const Playbutton = document.querySelector('.fa-play');
    const Stopbutton = document.querySelector('.fa-square');
    const Remixbutton = document.querySelector('.fa-circle');
    const Recordbutton = document.querySelector('.fa-microphone');
    //const intervalID = setInterval(Melodie, 500);
    /*function Melodie()
    {
        for (let i=0; i<neueTonfolge.length; i++)
            {
                playSample(neueTonfolge[i]);
                sleep(1000);
            }
    }
    */
    /*Playbutton.addEventListener("click", function ()
    {
        setInterval(function()
        {
            for (let i=0; i<Tonfolge.length; i++)
                {
                    //setTimeout(() => {playSample(Tonfolge[i]);},1500);
                    playSample(Tonfolge[i])
                    //sleep(1500);
                }
        }, 1500);
    })
    */
    let intervalID;
    Playbutton.addEventListener("click", function () {
        intervalID = setInterval(() => {
            for (let i = 0; i < neueTonfolge.length; i++) {
                playSample(neueTonfolge[i]);
                sleep(1000);
            }
        }, 1000);
        Playbutton.classList.add('is-hidden');
        Stopbutton.classList.remove('is-hidden');
    });
    Stopbutton.addEventListener("click", function () {
        clearInterval(intervalID);
        Stopbutton.classList.add('is-hidden');
        Playbutton.classList.remove('is-hidden');
    });
    //let X : number = Math.round (Math.random() * 11)
    /*function Mix ()
    {
        let X : number = Math.round (Math.random() * 11)
        playSample (Tonfolge[X]);
        console.log("playSample");
    }
    */
    Remixbutton.addEventListener("click", function () {
        for (let index = 0; index < 5; index++) {
            neueTonfolge[index] = Tonfolge[Math.round(Math.random() * 11)];
        }
    });
    Recordbutton.addEventListener("click", function () {
        for (let o = 0; o < 5; o++) {
            neueTonfolge.pop();
        }
        C.addEventListener("click", function () {
            playSample(sound5);
            neueTonfolge.push(sound5);
        });
        Db.addEventListener("click", function () {
            playSample(sound7);
            neueTonfolge.push(sound7);
        });
        D.addEventListener("click", function () {
            playSample(sound6);
            neueTonfolge.push(sound6);
        });
        Eb.addEventListener("click", function () {
            playSample(sound9);
            neueTonfolge.push(sound9);
        });
        E.addEventListener("click", function () {
            playSample(sound8);
            neueTonfolge.push(sound8);
        });
        F.addEventListener("click", function () {
            playSample(sound10);
            neueTonfolge.push(sound10);
        });
        Gb.addEventListener("click", function () {
            playSample(sound12);
            neueTonfolge.push(sound12);
        });
        G.addEventListener("click", function () {
            playSample(sound11);
            neueTonfolge.push(sound11);
        });
        Ab.addEventListener("click", function () {
            playSample(sound2);
            neueTonfolge.push(sound2);
        });
        A.addEventListener("click", function () {
            playSample(sound1);
            neueTonfolge.push(sound1);
        });
        Bb.addEventListener("click", function () {
            playSample(sound4);
            neueTonfolge.push(sound4);
        });
        H.addEventListener("click", function () {
            playSample(sound3);
            neueTonfolge.push(sound3);
        });
    });
    /*var i = 0
    
    Playbutton.addEventListener("click", function ()
    {
        setInterval(function()
        {
           playSample(Tonfolge[i])
           i++
           if (i == Tonfolge.length) {i=0}
        }, 1200);
    })
    */
    window.addEventListener("keydown", Tastatur);
    function Tastatur(e) {
        if (e.keyCode == 65) {
            playSample(sound5);
        }
        if (e.keyCode == 83) {
            playSample(sound6);
        }
        else if (e.keyCode == 68) {
            playSample(sound8);
        }
        else if (e.keyCode == 70) {
            playSample(sound10);
        }
        else if (e.keyCode == 71) {
            playSample(sound11);
        }
        else if (e.keyCode == 72) {
            playSample(sound1);
        }
        else if (e.keyCode == 74) {
            playSample(sound3);
        }
        else if (e.keyCode == 87) {
            playSample(sound7);
        }
        else if (e.keyCode == 69) {
            playSample(sound9);
        }
        else if (e.keyCode == 84) {
            playSample(sound12);
        }
        else if (e.keyCode == 90) {
            playSample(sound2);
        }
        else if (e.keyCode == 85) {
            playSample(sound4);
        }
    }
})(A9neu || (A9neu = {}));
//# sourceMappingURL=script.js.map