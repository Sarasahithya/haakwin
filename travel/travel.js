function nextStep(currentStep, nextStep) {
  document.getElementById(currentStep).style.display = 'none';
  document.getElementById(nextStep).style.display = 'block';
}
function previousStep(currentStep, previousStep) {
  document.getElementById(currentStep).style.display = 'none';
  document.getElementById(previousStep).style.display = 'block';
}
function showTransportOptions(tripType) {
  let transportOptionsDiv = document.getElementById('transportOptions');
  transportOptionsDiv.innerHTML = ''; 
  if (tripType === 'national') {
      transportOptionsDiv.innerHTML = `
          <label><input type="checkbox" name="transport" value="bus" onclick="calculateCost()"> Bus</label><br>
          <label><input type="checkbox" name="transport" value="train" onclick="calculateCost()"> Train</label><br>
          <label><input type="checkbox" name="transport" value="flight" onclick="calculateCost()"> Flight</label><br>
      `;
  } else if (tripType === 'international') {
      transportOptionsDiv.innerHTML = `
          <label><input type="checkbox" name="transport" value="flight" onclick="calculateCost()"> Flight</label><br>
      `;
  }
}
function calculateCost() {
  const transport = Array.from(document.querySelectorAll('input[name="transport"]:checked')).map(el => el.value);
  const seats = parseInt(document.getElementById('seats').value, 10);
  let costPerSeat = 0;
  if (transport.includes('bus')) {
      costPerSeat = 250;
  } else if (transport.includes('train')) {
      costPerSeat = 500;
  } else if (transport.includes('flight')) {
      costPerSeat = 5000;
  }
  if (seats && !isNaN(seats)) {
      const totalCost = costPerSeat * seats;
      document.getElementById('totalCost').innerHTML = `Total Cost: ${totalCost} INR`;
  }
}
function gatherAndShowReview() {
  const tripType = document.querySelector('input[name="tripType"]:checked').value;
  const transport = Array.from(document.querySelectorAll('input[name="transport"]:checked')).map(el => el.value).join(', ');
  const departure = document.getElementById('departure').value;
  const destination = document.getElementById('destination').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const seats = document.getElementById('seats').value; 
  let costPerSeat = 0;
  if (transport.includes('bus')) costPerSeat = 250;
  else if (transport.includes('train')) costPerSeat = 500;
  else if (transport.includes('flight')) costPerSeat = 20000;
  const totalCost = costPerSeat * seats;
  const reviewDiv = document.getElementById('reviewDetails');
  reviewDiv.innerHTML = `
      <h3>Your Travel Details:</h3>
      <p><strong>Trip Type:</strong> ${tripType}</p>
      <p><strong>Transport:</strong> ${transport}</p>
      <p><strong>Departure Location:</strong> ${departure}</p>
      <p><strong>Destination Location:</strong> ${destination}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Seats:</strong> ${seats}</p>
      <p><strong>Total Cost:</strong> ${totalCost} INR</p>
  `;
}
document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
  e.preventDefault();
  gatherAndShowReview();
});