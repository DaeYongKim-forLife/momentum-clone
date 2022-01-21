const quote = [{ author: "-asd-", content: "asd" },
    { author: "-fgh-", content: "fgh" },
    { author: "-zxc-", content: "zxc" }, { author: "-123-", content: "123" }];
const spanAuthor = document.querySelector("#quote-author");
const spanContent = document.querySelector("#quote-content");
const author = quote.author;
const quoteNum = Math.floor(Math.random() * quote.length);
spanAuthor.innerText = quote[quoteNum].author
spanContent.innerText = quote[quoteNum].content

