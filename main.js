x = 0;
y = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
    apple = loadImage("apple.png")
}

function start()
{
    document.getElementById("status").innerHTML = "System is listning please speak";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event)

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech Has Been Recognized as : " + content;
    to_number = Number(content);
        if(Number.isInteger(to_number))
        {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "Started Drawing Apples ";
            draw_apple = "set";
        }
       else
       {
        document.getElementById("status").innerHTMLHTML = "The speech has not recognized a number."
       }
}
function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    
    if(draw_apple == "set")
    {
        for(var i = 1; i <= to_number; i++)
        {
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
        }
        
        document.getElementById("status").innerHTML = "Apples Drawn";
        draw_apple = "";
        speak_data = to_number + "Apples Drawn";
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}