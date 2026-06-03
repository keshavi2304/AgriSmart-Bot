function login(){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("dashboard").style.display="block";
}

// AI CHAT DEMO

function sendChat(){

    let question =
    document.getElementById("chatInput").value;

    let answer =
    "AgriSmart AI: For better crop growth, use quality seeds, proper irrigation and organic fertilizers.";

    document.getElementById("chatResult").innerHTML =
    "<b>Question:</b> " + question +
    "<br><br>" +
    answer;
}

// WEATHER DEMO

function getWeather(){

    document.getElementById("weatherResult").innerHTML =
    `
    🌡 Temperature: 30°C <br>
    ☁ Condition: Partly Cloudy <br>
    💧 Humidity: 65% <br>
    🌬 Wind: 12 km/h
    `;
}

// CROP SEARCH

function searchCrop(){

    let crop =
    document.getElementById("cropName")
    .value.toLowerCase();

    const data = {

        mango:
        "Mango is a summer fruit rich in Vitamin A and C.",

        banana:
        "Banana grows throughout the year and requires moderate watering.",

        tomato:
        "Tomato is rich in antioxidants and grows well in cool weather.",

        potato:
        "Potato is a winter crop requiring fertile soil.",

        onion:
        "Onion is widely cultivated and requires well-drained soil."
    };

    document.getElementById("cropResult").innerHTML =
    data[crop] || "No information found.";
}

// PRODUCT SCANNER DEMO

function scanProduct(){

    document.getElementById("scanResult").innerHTML =
    "✅ Product scanned successfully. Sample result: Fresh Tomato detected.";
}

// FAKE NEWS CHECKER DEMO

function checkNews(){

    let score =
    Math.floor(Math.random()*40)+60;

    document.getElementById("newsResult").innerHTML =
    "News Accuracy Score: " +
    score +
    "%";
}

// VOICE ASSISTANT

function startVoice(){

    if(!('webkitSpeechRecognition' in window)){
        alert("Voice recognition not supported.");
        return;
    }

    const recognition =
    new webkitSpeechRecognition();

    recognition.lang="en-US";

    recognition.start();

    recognition.onresult=function(event){

        let text =
        event.results[0][0].transcript;

        document.getElementById("voiceResult")
        .innerHTML =
        "🎤 You said: " + text;
    };
}
