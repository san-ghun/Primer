const quotes = [
    {
        quote: "Coding like poetry should be short and concise.",
        author: "Santosh Kalwar",
    },
    {
        quote: "It's not a bug; It's an undocumented feature.",
        author: "Anonymous",
    },
    {
        quote: "First, solve the problem, Then, write the code.",
        author: "John Johnson",
    },
    {
        quote: "Code is like humor. When you have to explainit, it's bad.",
        author: "Cory House",
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
    },
    {
        quote: "Clean code always look like it was written by someone who cares.",
        author: "Robert C. Martin",
    },
    {
        quote: "Programming is the art of algorithm design and the craft of debugging errant code.",
        author: "Ellen Ullman",
    },
    {
        quote: "Anyone can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        quote: "Experience is the name everyone gives to their mistakes",
        author: "Oscar Wilde",
    },
    {
        quote: "If we want users to like our software, we should design it to behave like a likable person",
        author: "Alan Cooper",
    },
    {
        quote: "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?",
        author: "Olawale Daniel",
    },
    {
        quote: "Programmers: A machine that turns coffee into code.",
        author: "Anonymous",
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        author: "Linus Torvalds",
    },
    {
        quote: "Programming is learned by writing programs.",
        author: "Brian Kernighan",
    },
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = `"${todaysQuote.quote}"`;
    author.innerText = `- ${todaysQuote.author} -`;
}

getQuote();
