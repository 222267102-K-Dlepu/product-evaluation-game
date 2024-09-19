let decisionsMade = 0;
const totalDecisions = 5; // Updated to 5 products
const products = [
  { name: 'Product 1', img: 'images/product1.jpg' },
  { name: 'Product 2', img: 'images/product2.jpg' },
  { name: 'Product 3', img: 'images/product3.jpg' },
  { name: 'Product 4', img: 'images/product4.jpg' },
  { name: 'Product 5', img: 'images/product5.jpg' },
];

function makeDecision(choice) {
  // Display the selected option
  const resultBox = document.getElementById('selection-result');
  const hiddenMessage = document.getElementById('hidden-message');
  const nextStep = document.getElementById('new-step');

  if (choice === 'Accept') {
    resultBox.innerText = `You chose to Accept ${products[decisionsMade].name}`;
    resultBox.style.color = '#4CAF50';
  } else {
    resultBox.innerText = `You chose to Reject ${products[decisionsMade].name}`;
    resultBox.style.color = '#f44336';
  }

  // Show the hidden message below the buttons
  hiddenMessage.style.display = 'block';
  hiddenMessage.innerText = "You've made a decision!";

  // Show next step or progress text
  nextStep.style.display = 'block';
  nextStep.innerText = `You've made ${
    decisionsMade + 1
  } out of ${totalDecisions} decisions`;

  // Update progress bar
  const progressBar = document.getElementById('progress-bar');
  const progressPercent = ((decisionsMade + 1) / totalDecisions) * 100;
  progressBar.style.width = progressPercent + '%';

  // Load the next product image and name if there are more products
  decisionsMade++;
  if (decisionsMade < totalDecisions) {
    document.getElementById('product-image').src = products[decisionsMade].img;
    document.getElementById('product-name').innerText =
      products[decisionsMade].name;
  } else {
    // Disable buttons after all decisions are made
    document.querySelector('.accept-btn').disabled = true;
    document.querySelector('.reject-btn').disabled = true;
    nextStep.innerText = "All decisions made. You've completed!";
  }
}
