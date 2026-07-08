const API_KEY = "AQ.Ab8RN6JN7yU9oj4GBVIdVW9UyMOE6bUhxHoO-Y8Z7aBxR89wWw";

const chatBox = document.getElementById("chat-box");
const input = document.getElementById("userInput");

async function sendMessage() {

    const message = input.value.trim();

    if (message === "") return;

    chatBox.innerHTML += `<div class="user">${message}</div>`;

    input.value = "";

    try {

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: message
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        console.log(data);

        if (!response.ok) {
            throw new Error(data.error.message);
        }

        const reply = data.candidates[0].content.parts[0].text;

        chatBox.innerHTML += `<div class="bot">${reply}</div>`;

        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {

        chatBox.innerHTML += `<div class="bot">Error: ${error.message}</div>`;

    }

}

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});