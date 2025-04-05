// Footer Date and Last Modified
const yearSpan = document.getElementById("currentYear");
const lastModSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModSpan.textContent = document.lastModified;


const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("windSpeed").textContent);
const chillSpan = document.getElementById("windChill");

if (temp <= 10 && wind > 4.8) {
  const windChill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16);
  chillSpan.textContent = windChill.toFixed(1);
} else {
  chillSpan.textContent = "N/A";
}

