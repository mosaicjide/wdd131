// countdown.js
function updateCountdown() {
  const timer = document.getElementById('timer');
  const now = new Date();
  const year = now.getMonth() === 10 && now.getDate() > 1 ? now.getFullYear() + 1 : now.getFullYear();
  const eventDate = new Date(`${year}-11-01T00:00:00`);
  const diff = eventDate - now;

  if (diff <= 0) {
    timer.textContent = "The competition is happening today!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `
    <div class="countdown-block"><span>${days}</span><label>Days</label></div>
    <div class="countdown-block"><span>${hours}</span><label>Hours</label></div>
    <div class="countdown-block"><span>${minutes}</span><label>Minutes</label></div>
    <div class="countdown-block"><span>${seconds}</span><label>Seconds</label></div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
