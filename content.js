const quotes = [
  {
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    quote: "The greater the difficulty, the more glory in surmounting it.",
    author: "Epicurus",
  },
  {
    quote:
      "It does not matter how many books you have, but how good the books are which you have.",
    author: "Lucius Annaeus Seneca",
  },
  {
    quote:
      "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    author: "Epictetus",
  },
  {
    quote: "No man is free who is not a master of himself.",
    author: "Epictetus",
  },
  {
    quote:
      "If one doesn't know to which port one is sailing, no wind is favorable.",
    author: "Seneca",
  },
  {
    quote: "The greatest wealth is to live content with little.",
    author: "Plato",
  },
  {
    quote: "He who is not a good servant will not be a good master.",
    author: "Plato",
  },
  {
    quote:
      "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
  },
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const { quote, author } = getRandomQuote();
  quoteElement.innerHTML = quote;
  authorElement.innerHTML = `- ${author}`;
}

setQuote();
