// Request a Single Card from a Newly Shuffled Deck
async function drawCard() {
    try {
        let baseURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
        let card = await $.getJSON(baseURL);

        if (card.cards && card.cards.length > 0) {
            console.log(`${card.cards[0].value} of ${card.cards[0].suit}`);
        } else {
            console.log("No card drawn");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

// Draw Two Cards from the Same Deck
async function drawTwoCards() {
    try {
        let shuffleURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
        let deckResponse = await $.getJSON(shuffleURL);

        if (deckResponse.success && deckResponse.deck_id) {
            let drawURL = `https://deckofcardsapi.com/api/deck/${deckResponse.deck_id}/draw/?count=2`;
            let cardsResponse = await $.getJSON(drawURL);

            if (cardsResponse.cards && cardsResponse.cards.length === 2) {
                console.log(`${cardsResponse.cards[0].value} of ${cardsResponse.cards[0].suit}`);
                console.log(`${cardsResponse.cards[1].value} of ${cardsResponse.cards[1].suit}`);
            } else {
                console.log("Not enough cards drawn");
            }
        } else {
            console.log("Failed to create a new deck");
        }
    } catch (e) {
        console.error("Error:", e);
    }
}
