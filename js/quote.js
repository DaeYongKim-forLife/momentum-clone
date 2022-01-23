const quote = [{ author: "-Friedrich Nietzsche-", content: "To live is to suffer, to survive is to find some meaning in the suffering." },
    { author: "-Aristotle-", content: "There is no great genius without some touch of madness." },
    { author: "-Aristotle-", content: "A friend to all is a friend to none." }, { author: "-William Shakespeare-", content: "A fool thinks himself to be wise, but a wise man knows himself to be a fool." }];
const spanAuthor = document.querySelector("#quote-author");
const spanContent = document.querySelector("#quote-content");
const author = quote.author;
const quoteNum = Math.floor(Math.random() * quote.length);
spanContent.innerText = quote[quoteNum].content
spanAuthor.innerText = quote[quoteNum].author

