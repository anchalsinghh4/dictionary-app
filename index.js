const searchBtn = document.getElementById("searchBtn");
const wordInput = document.getElementById("word");
const wordText = document.querySelector(".word");
const meaningText = document.querySelector(".meaning");
const exampleText = document.querySelector(".example");

searchBtn.addEventListener("click", () => {
    let word = wordInput.value.trim();

    if (word === "") {
        alert("Please enter a word");
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            wordText.innerText = data[0].word;
            meaningText.innerText = "Meaning: " + data[0].meanings[0].definitions[0].definition;

            if (data[0].meanings[0].definitions[0].example) {
                exampleText.innerText =
                    "Example: " + data[0].meanings[0].definitions[0].example;
            } else {
                exampleText.innerText = "";
            }
        })
        .catch(() => {
            wordText.innerText = "";
            meaningText.innerText = "Word not found!";
            exampleText.innerText = "";
        });
});
