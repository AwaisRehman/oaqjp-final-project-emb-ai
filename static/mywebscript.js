const RunSentimentAnalysis = () => {
    // Get the text to analyze from the input field
    const textToAnalyze = document.getElementById("textToAnalyze").value;

    // Ensure the input is encoded correctly for a URL
    const encodedText = encodeURIComponent(textToAnalyze);

    // Use fetch API for the request
    fetch(`emotionDetector?textToAnalyze=${encodedText}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Assuming the server responds with JSON
        })
        .then(data => {
            // Update the UI with the response data
            document.getElementById("system_response").innerHTML = JSON.stringify(data, null, 2); // Pretty print the JSON
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById("system_response").innerHTML = `Error: ${error.message}`;
        });
};

