function getData() {
    const mockData = {
        message: "Moi t‰m‰ API sano p‰iv‰m‰‰r‰ ja aika.",
        timestamp: new Date().toLocaleString()
    };

    // Display the data on the page
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
                <p>${mockData.message}</p>
                <p>Timestamp: ${mockData.timestamp}</p>
            `;
}