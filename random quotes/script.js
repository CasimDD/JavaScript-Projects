function generate() {
  let quotes = {
    "-Oscar Wilde": "Be yourself; everyone else is already taken.",
    "-Marcus Tullius Cicero":
      "A room without books is like a body without a soul.",
    "― Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "― Roy T. Bennett":
      "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    "― Roy T. Bennett":
      "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
    "― Zig Ziglar":
      "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
    "― Haruki Murakami":
      "And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.",
  };
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
