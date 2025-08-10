
// below vriables will help to hide the fortune cookie message at start of the website

const foruneCookieBox1 = document.querySelector(".foruneCookieBox1");
const foruneCookieBox2 = document.querySelector(".foruneCookieBox2");
const foruneCookieBox3 = document.querySelector(".foruneCookieBox3");
const foruneCookieBox4 = document.querySelector(".foruneCookieBox4");
const foruneCookieBox5 = document.querySelector(".foruneCookieBox5");
const foruneCookieBox6 = document.querySelector(".foruneCookieBox6");
const foruneCookieBox7 = document.querySelector(".foruneCookieBox7");
const foruneCookieBox8 = document.querySelector(".foruneCookieBox8");
const foruneCookieBox9 = document.querySelector(".foruneCookieBox9");
const foruneCookieBox10 = document.querySelector(".foruneCookieBox10");

// Hiding the messages

foruneCookieBox1.style.display = 'none';
foruneCookieBox2.style.display = 'none';
foruneCookieBox3.style.display = 'none';
foruneCookieBox4.style.display = 'none';
foruneCookieBox5.style.display = 'none';
foruneCookieBox6.style.display = 'none';
foruneCookieBox7.style.display = 'none';
foruneCookieBox8.style.display = 'none';
foruneCookieBox9.style.display = 'none';
foruneCookieBox10.style.display = 'none';


// creating function to show messages as per the random Number
// This function creates random number

const displayNumber = document.querySelector(".randomNumberText");

document.querySelector(".getNumberButton").addEventListener("click", function(){
    displayNumber.textContent =  Math.trunc(Math.random()*10)+1;
    randomNumber = Number(displayNumber.textContent);
    console.log(randomNumber);

    if(randomNumber == 1) {
    foruneCookieBox1.style.display = 'flex';
    document.querySelector(".foruneCookieBox1").addEventListener("click", function (){
        document.querySelector(".firstMessage1").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage1").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox1.style.display = 'none';
    })
    }
    else if (randomNumber == 2){
    foruneCookieBox2.style.display = 'flex';
    document.querySelector(".foruneCookieBox2").addEventListener("click", function (){
        document.querySelector(".firstMessage2").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage2").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox2.style.display = 'none';
    })  
    }
    else if (randomNumber == 3){
    foruneCookieBox3.style.display = 'flex';
    document.querySelector(".foruneCookieBox3").addEventListener("click", function (){
        document.querySelector(".firstMessage3").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage3").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox3.style.display = 'none';
    })  
    }
    else if (randomNumber == 4){
    foruneCookieBox4.style.display = 'flex';
    document.querySelector(".foruneCookieBox4").addEventListener("click", function (){
        document.querySelector(".firstMessage4").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage4").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox4.style.display = 'none';
    })  
    }  
    else if (randomNumber == 5){
    foruneCookieBox5.style.display = 'flex';
    document.querySelector(".foruneCookieBox5").addEventListener("click", function (){
        document.querySelector(".firstMessage5").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage5").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox5.style.display = 'none';
    })  
    }  
    else if (randomNumber == 6){
    foruneCookieBox6.style.display = 'flex';
    document.querySelector(".foruneCookieBox6").addEventListener("click", function (){
        document.querySelector(".firstMessage6").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage6").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox6.style.display = 'none';
    })  
    }
    else if (randomNumber == 7){
    foruneCookieBox7.style.display = 'flex';
    document.querySelector(".foruneCookieBox7").addEventListener("click", function (){
        document.querySelector(".firstMessage7").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage7").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox7.style.display = 'none';
    })  
    }
    else if (randomNumber == 8){
    foruneCookieBox8.style.display = 'flex';
    document.querySelector(".foruneCookieBox8").addEventListener("click", function (){
        document.querySelector(".firstMessage8").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage8").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox8.style.display = 'none';
    })  
    }
    else if (randomNumber == 9){
    foruneCookieBox9.style.display = 'flex';
    document.querySelector(".foruneCookieBox9").addEventListener("click", function (){
        document.querySelector(".firstMessage9").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage9").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox9.style.display = 'none';
    })  
    }
    else if (randomNumber == 10){
    foruneCookieBox10.style.display = 'flex';
    document.querySelector(".foruneCookieBox10").addEventListener("click", function (){
        document.querySelector(".firstMessage10").style.display = 'flex';
        document.querySelector(".overlay").style.display = 'flex';
        document.querySelector(".closeButton").style.display = 'flex';
    })

    document.querySelector(".closeButton").addEventListener("click", function(){
        document.querySelector(".firstMessage10").style.display = 'none';
        document.querySelector(".overlay").style.display = 'none';
        document.querySelector(".closeButton").style.display = 'none';
        foruneCookieBox10.style.display = 'none';
    })  
    }
});

// This Is for resetting the page

document.querySelector(".resetButton").addEventListener("click", function(){
    displayNumber.textContent = '0';
    foruneCookieBox1.style.display = 'none';
    foruneCookieBox2.style.display = 'none';
    foruneCookieBox3.style.display = 'none';
    foruneCookieBox4.style.display = 'none';
    foruneCookieBox5.style.display = 'none';
    foruneCookieBox6.style.display = 'none';
    foruneCookieBox7.style.display = 'none';
    foruneCookieBox8.style.display = 'none';
    foruneCookieBox9.style.display = 'none';
    foruneCookieBox10.style.display = 'none';
});