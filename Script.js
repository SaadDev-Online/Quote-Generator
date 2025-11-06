const quote = document.getElementById("text");
const author = document.getElementById("author");
const btn = document.getElementById("new-quote");

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
];

const backgroundColors = [
    "#AB886D",
    "#D6C0B3",
    "#00FF9C",
    "#B6FFA1",
    "#FEFFA7",
    "#FFE700",
    "#FF6F61", // Coral Red
    "#88B04B", // Soft Green
    "#F7CAC9", // Rose Quartz
    "#92A8D1", // Serenity Blue
    "#E27D60", // Burnt Orange
    "#DE7A22", // Bright Orange
    "#3E8989", // Teal
    "#FF8C00", // Dark Orange
    "#2C3E50", // Midnight Blue
];

const displayRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quote.innerText = randomQuote.text;
    author.innerText = `— ${randomQuote.author}`;

    const randomColors = Math.floor(Math.random() * backgroundColors.length);
    document.body.style.backgroundColor = backgroundColors[randomColors];

    author.style.color = backgroundColors[randomColors];
}

window.addEventListener("DOMContentLoaded", displayRandomQuote);
btn.addEventListener("click", displayRandomQuote);