let voiceselect = document.querySelector("select");
let voices = [];

// Load voices
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceselect.innerHTML = "";

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + " (" + voice.lang + ")", i);
        voiceselect.appendChild(option);
    });
}

// Some browsers load voices asynchronously
window.speechSynthesis.onvoiceschanged = populateVoices;

// Listen button
document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (!text) return;

    let speech = new SpeechSynthesisUtterance(text);

    // Set selected voice
    const selectedIndex = voiceselect.value;
    if (voices[selectedIndex]) speech.voice = voices[selectedIndex];

    window.speechSynthesis.speak(speech);
});

// Change voice immediately when selected (optional)
voiceselect.addEventListener("change", () => {
    const selectedIndex = voiceselect.value;
    // You can optionally set default voice for next utterances
});
