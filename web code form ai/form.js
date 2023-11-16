function reverseText() {
    // Get the input text
    const inputText = document.getElementById('textInput').value;

    // Reverse the input text
    const reversedText = inputText.split('').reverse().join('');

    // Display the reversed text
    document.getElementById('reversedText').textContent = "Reversed Text: " + reversedText;
}
