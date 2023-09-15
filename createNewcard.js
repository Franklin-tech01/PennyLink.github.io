// export const generateVirtualCards = () => {
  // Get the "New Card" button and the cards container
  const createNewCardButton =
    document.getElementById("createNewCard");
  const cardsContainer = document.querySelector(
    ".cards-container"
  );

  // Add a click event listener to the "New Card" button
  createNewCardButton.addEventListener("click", createCard);

  // Function to generate a random card number
  function generateRandomCardNumber() {
    let cardNumber = "";
    for (let i = 0; i < 16; i++) {
      cardNumber += Math.floor(Math.random() * 10); // Random digit (0-9)
      if (i % 4 === 3 && i < 15) {
        cardNumber += " "; // Add space every 4 digits
      }
    }
    return cardNumber;
  }

  // Function to generate a random expiration date
  function generateRandomExpiration() {
    const randomMonth = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
    const randomYear = Math.floor(Math.random() * 5) + 22; // Random year (22-26)
    return `${randomMonth.toString().padStart(2, "0")}/${randomYear}`;
  }

  // Function to create a new card
  function createCard() {
    // Check the number of existing cards
    const existingCards =
      cardsContainer.querySelectorAll(".card").length;
    if (existingCards >= 2) {
      alert("Can't create anymore cards");
      return; // Do not create more than 2 cards
    }

    // Create a new card element
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // Generate random card number and expiration date
    const cardName = localStorage.getItem(
      "username-signup"
    );
    const randomCardNumber = generateRandomCardNumber();
    const randomExpiration = generateRandomExpiration();

    // Set the content for the new card
    newCard.innerHTML = `
  <div class="logo">
      <h2 class="card-title">${cardName}</h2>
      <img src="Assets/mastercard-26161.png" alt="">
  </div>
  <p class="card-info">Card Number: ${randomCardNumber}</p>
  <p class="card-info">Expires: ${randomExpiration}</p>
`;

    // Append the new card to the cards container
    cardsContainer.appendChild(newCard);
  }
// };
