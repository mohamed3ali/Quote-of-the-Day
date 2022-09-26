var quoteAdd = document.getElementById("quoteAdd");
var quoteAddAu = document.getElementById("quoteAddAu")
var quoteAol = [
    {quote : 
       "“Be the change that you wish to see in the world.” ",auther : "―― Mahatma Gandhi"}

    ,{ quote : "“In three words I can sum up everything I've learned about life: it goes on.”",auther : "― Robert Frost"}
 
    ,{ quote : "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",auther : "― J.K. Rowling, Harry Potter and the Goblet of Fire"}
    
    ,{ quote : "“If you tell the truth, you don't have to remember anything.” ",auther : "― Mark Twain"}
    
    ,{quote : "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",auther : "― Maya Angelou"}

    ,{quote : "“I am so clever that sometimes I don't understand a single word of what I am saying.”",auther : "― Oscar Wilde, The Happy Prince and Other Stories"}

    ,{quote : "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",auther : "― Ralph Waldo Emerson"}
]


function quoteA(){
    var x = Math.floor(Math.random() * quoteAol.length);
console.log(x)
quoteAdd.innerHTML = quoteAol[x].quote;
quoteAddAu.innerHTML = quoteAol[x].auther
}