const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    "All our dreams can come true, if we have the courage to pursue them. – Walt Disney",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. – Socrates",
    "Whatever you are, be a good one. ― Abraham Lincoln",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Dreams don’t work unless you do. – John C. Maxwell",
    "Today is your opportunity to build the tomorrow you want. – Ken Poirot",
    "If you can dream it, you can do it. – Walt Disney",
    "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself. – Rumi",
    "Done is better than perfect. – Sheryl Sandberg"
]

button.addEventListener('click', () => {
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuotes;
})