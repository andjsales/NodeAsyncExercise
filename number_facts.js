// Get a Fact About Your Favorite Number
async function getFact(num) {
    try {
        let baseURL = 'http://numbersapi.com/';
        let url = `${baseURL}${num}?json`;
        let fact = await $.getJSON(url);

        console.log(fact.text);
    } catch (e) {
        console.error("Error:", e);
    }
}


// Get Data on Multiple Numbers in a Single Request
async function multipleNumbers(nums) {
    try {
        let baseURL = 'http://numbersapi.com/';
        let url = `${baseURL}${nums}?json`;
        let facts = await $.getJSON(url);

        for (const [key, value] of Object.entries(facts)) {
            console.log(`Fact for number ${key}: ${value.text}`);
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

// Get 4 Facts on Your Favorite Number
async function getFourFacts(num) {
    try {
        let baseURL = 'http://numbersapi.com/';
        // Requesting four different facts about the number
        let url = `${baseURL}${num}/1..4?json`;

        let facts = await $.getJSON(url);

        // Checking if the response is an object and has properties
        if (facts && typeof facts === 'object') {
            Object.entries(facts).forEach(([key, fact]) => {
                console.log(`Fact ${key}: ${fact.text}`);
            });
        } else {
            console.log("No facts available for this number.");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}
