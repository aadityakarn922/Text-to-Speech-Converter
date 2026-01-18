let voiceselect = document.querySelector("select");
let voices = [];


function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceselect.innerHTML = "";

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + " (" + voice.lang + ")", i);
        voiceselect.appendChild(option);
    });
}


window.speechSynthesis.onvoiceschanged = populateVoices;


document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (!text) return;

    let speech = new SpeechSynthesisUtterance(text);

    
    const selectedIndex = voiceselect.value;
    if (voices[selectedIndex]) speech.voice = voices[selectedIndex];

    window.speechSynthesis.speak(speech);
});


voiceselect.addEventListener("change", () => {
    const selectedIndex = voiceselect.value;
    
});

