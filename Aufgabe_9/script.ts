namespace A9 {

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
        Klang.play();
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
    let neueTonfolge: any [] = [sound5, sound7, sound6, sound9, sound8]
    // damit der Playbutton am Anfang funktioniert, müssten hier einige Werte 
    const Aufnahme: any [] = []
    
   /* function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
    */
    const Playbutton = document.querySelector('.fa-play') as HTMLImageElement
    const Stopbutton = document.querySelector('.fa-square') as HTMLImageElement
    const Remixbutton = document.querySelector('.fa-circle') as HTMLImageElement
    const Recordbutton = document.querySelector('.fa-microphone') as HTMLElement
    const RecordStop = document.querySelector('.fa-trash-alt') as HTMLElement
    
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
    
    let intervalID
    
    
    Playbutton.addEventListener("click", function () {
        console.log(neueTonfolge.length);
        console.log(neueTonfolge[0]);
        console.log(neueTonfolge[1]);
        console.log(neueTonfolge[2]);
        console.log(neueTonfolge[3]);
        console.log(neueTonfolge[4]);
        console.log(neueTonfolge[5]);
        var i = 0
        intervalID=setInterval(() =>{
            //for (let i=0; i<neueTonfolge.length; i++){
                playSample(neueTonfolge[i]);
                //sleep(1000);
                //}
                i++
                if (i == neueTonfolge.length) { i = 0}
            },1000);
        Playbutton.classList.add('is-hidden');
        Stopbutton.classList.remove('is-hidden');
    })
    
    Stopbutton.addEventListener("click", function () {
        clearInterval (intervalID);
        Stopbutton.classList.add('is-hidden');
        Playbutton.classList.remove('is-hidden');
    })
    
    
    //let X : number = Math.round (Math.random() * 11)
    
    
    /*function Mix () 
    {
        let X : number = Math.round (Math.random() * 11)
        playSample (Tonfolge[X]);
        console.log("playSample");
    }
    */
    
    Remixbutton.addEventListener("click", function ()
    {
        neueTonfolge = []
        //let laenge = neueTonfolge.length;
        //if (neueTonfolge.length <= 4)
        //{
        //    laenge = 5;
        //}
        for(let index=0; index<5; index++)
        {
            neueTonfolge[index] = Tonfolge[Math.round (Math.random() * 11)];
        }
    })

        
    let Record = document.getElementsByClassName('.notactive');

    Recordbutton.addEventListener("click", function ()
    {   
        Recordbutton.classList.add('notactive');
        RecordStop.classList.remove('notactive');
        //let grenzwert = neueTonfolge.length
        //for (let o=0; o<grenzwert; o++) 
        //{
        //neueTonfolge.pop();
        //}
        console.log(neueTonfolge.length);
        neueTonfolge = [] 
   })

   RecordStop.addEventListener("click", function ()
   { 
        RecordStop.classList.add('notactive');
        Recordbutton.classList.remove('notactive');
        neueTonfolge = [] 
   })

  //console.log(RecordStop.classList.contains('notactive'));
  
   
   if (Recordbutton.classList.contains ('notactive')) {
    C.addEventListener("click", function(){
        neueTonfolge.push(sound5); 
    })
    Db.addEventListener("click", function(){
        neueTonfolge.push(sound7) 
    })
    D.addEventListener("click", function(){
        neueTonfolge.push(sound6) 
    })
    Eb.addEventListener("click", function(){
        neueTonfolge.push(sound9) 
    })
    E.addEventListener("click", function(){
        neueTonfolge.push(sound8) 
    })
    F.addEventListener("click", function(){
        neueTonfolge.push(sound10) 
    })
    Gb.addEventListener("click", function(){
        neueTonfolge.push(sound12) 
    })
    G.addEventListener("click", function(){
        neueTonfolge.push(sound11) 
    })
    Ab.addEventListener("click", function(){
        neueTonfolge.push(sound2) 
    })
    A.addEventListener("click", function(){
        neueTonfolge.push(sound1) 
    })
    Bb.addEventListener("click", function(){
        neueTonfolge.push(sound4) 
    })
    H.addEventListener("click", function(){
        neueTonfolge.push(sound3) 
    }
)} else {
    neueTonfolge = [];
}


//    setInterval (()=> {
//     console.log(neueTonfolge.length);
//    },2000)

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
    }
    
    
    
    }