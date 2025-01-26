function calculateTotalPrice() {
  const prices = document.querySelectorAll('.price p');
  
  let totalPrice = 0;

  prices.forEach(priceElement => {
      const priceText = priceElement.innerHTML; 
      const priceValue = +priceText; 
      totalPrice += priceValue; 
  });

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `${totalPrice - totalPrice * 20 / 100} рублей`;
}

document.getElementById('calculate').addEventListener('click', calculateTotalPrice);
