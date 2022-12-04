namespace A8 {

const C = document.querySelector("#C")
const Db = document.querySelector("#Db")
const D = document.querySelector("#D")
const Eb = document.querySelector("#Eb")
const E = document.querySelector("#E")
const F = document.querySelector("#F")
const Gb = document.querySelector("#Gb")
const G = document.querySelector("#G")
const Ab = document.querySelector("#Ab")
const A = document.querySelector("#A")
const Bb = document.querySelector("#Bb")
const H = document.querySelector("#H")

const sound1:HTMLAudioElement = new Audio('./assets/Keyboard/a.mp3');
const sound2:HTMLAudioElement = new Audio('./assets/Keyboard/af.mp3');
const sound3:HTMLAudioElement = new Audio('./assets/Keyboard/b.mp3');
const sound4:HTMLAudioElement = new Audio('./assets/Keyboard/bf.mp3');
const sound5:HTMLAudioElement = new Audio('./assets/Keyboard/c.mp3');
const sound6:HTMLAudioElement = new Audio('./assets/Keyboard/d.mp3');
const sound7:HTMLAudioElement = new Audio('./assets/Keyboard/df.mp3');
const sound8:HTMLAudioElement = new Audio('./assets/Keyboard/e.mp3');
const sound9:HTMLAudioElement = new Audio('./assets/Keyboard/ef.mp3');
const sound10:HTMLAudioElement = new Audio('./assets/Keyboard/f.mp3');
const sound11:HTMLAudioElement = new Audio('./assets/Keyboard/g.mp3');
const sound12:HTMLAudioElement = new Audio('./assets/Keyboard/gf.mp3');

function playSample (Klang){
    Klang.play()
}

C.addEventListener("click", function(){
    playSample(sound5)
})
Db.addEventListener("click", function(){
    playSample(sound7)
})
D.addEventListener("click", function(){
    playSample(sound6)
})
Eb.addEventListener("click", function(){
    playSample(sound9)
})
E.addEventListener("click", function(){
    playSample(sound8)
})
F.addEventListener("click", function(){
    playSample(sound10)
})
Gb.addEventListener("click", function(){
    playSample(sound12)
})
G.addEventListener("click", function(){
    playSample(sound11)
})
Ab.addEventListener("click", function(){
    playSample(sound2)
})
A.addEventListener("click", function(){
    playSample(sound1)
})
Bb.addEventListener("click", function(){
    playSample(sound4)
})
H.addEventListener("click", function(){
    playSample(sound3)  
})

const Tonfolge:any [] = [sound5, sound7, sound6, sound9, sound8, sound10, sound12, sound11, sound2, sound1, sound4, sound3];

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const Playbutton = document.querySelector('#play') as HTMLImageElement


Playbutton.addEventListener("click", function ()
{
    setInterval(function() 
    {
        for (let i=0; i<Tonfolge.length; i++)
            {
                //setTimeout(() => {playSample(Tonfolge[i]);},1500);
                playSample(Tonfolge[i])
                sleep(1500);
            }
    }, 1);
})

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
        playSample(sound5)
    }
    if (e.keyCode == 83) {
        playSample(sound6)
    }
    else if(e.keyCode == 68) {
        playSample(sound8)
    }
    else if(e.keyCode == 70) {
        playSample(sound10)
    }
    else if(e.keyCode == 71) {
        playSample(sound11)
    }
    else if(e.keyCode == 72) {
        playSample(sound1)
    }
    else if(e.keyCode == 74) {
        playSample(sound3)
    }
    else if(e.keyCode == 87) {
        playSample(sound7)
    }
    else if(e.keyCode == 69) {
        playSample(sound9)
    }
    else if(e.keyCode == 84) {
        playSample(sound12)
    }
    else if(e.keyCode == 90) {
        playSample(sound2)
    }
    else if(e.keyCode == 85) {
        playSample(sound4)
    }

    else if(e.keyCode == 32) {
        setInterval(function() 
        {
            for (let i=0; i<Tonfolge.length; i++)
                {
                    playSample(Tonfolge[i])
                    sleep(1500);
                }
        }, 1);
    }
}



}