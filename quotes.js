const quotes = [
    {
        "q": "Faults are yours to fix, not to curse.",
        "a": "Colin Powell",
    },
    {
        "q": "It's very strange that the people you love are often the people you're most cruel to.",
        "a": "Kenneth Branagh", 
    },
    {
        "q": "To raise your consciousness, surround yourself with people of higher consciousness.",
        "a": "Celestine Chua",
    },
    {
        "q": "No tree, it is said, can grow to heaven unless its roots reach down to hell.",
        "a": "Carl Jung",
    },
    {
    "q": "Man suffers only because he takes seriously what the gods made for fun.",
    "a": "Alan Watts",
    },
    {
    "q": "It is very obvious that we are not influenced by 'facts' but by our interpretation of the facts.",
    "a": "Alfred Adler", 
    },
    {
    "q": "Success is within the reach of just about everyone.",
    "a": "Lolly Daskal",
    },
    {
    "q": "To escape from the world means that one's mind is not concerned with the opinions of the world.",
    "a": "Dogen",
    },
    {
    "q": "When you move beyond your fear, you feel free.",
    "a": "Spencer Johnson",
    },
    {
    "q": "Life must be rich and full of loving-it's no good otherwise, no good at all, for anyone.",
    "a": "Jack Kerouac", 
    },
]
let output = document.getElementById("quotes-container");

console.log(quotes[0].q);

for(let i=0 ; i<10 ; i++){
    console.log(quotes[i].q);

const myDiv = document.createElement('div');  

myDiv.innerHTML = quotes[i].q + "<br>" + " - <i>" + quotes[i].a + "</i>";

output.appendChild(myDiv);

myDiv.classList.add("quotes-container");
}

