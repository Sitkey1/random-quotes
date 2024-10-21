const quotes = [
  "Что разум человека может постигнуть и во что он может поверить, того он способен достичь - Наполеон Хилл,",
  "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других - Флоренс Найтингейл",
  " Сложнее всего начать действовать, все остальное зависит только от упорства - Амелия Эрхарт",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generate-button");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote);

generateRandomQuote();
