var quotes = [
    `“Be yourself; everyone else is already taken.” <div class="text-center">  ― Oscar Wilde </div> `  , 
    `“Be yourself; everyone else is already taken.” <div class="text-center">  ― Oscar Wilde </div> `  , 
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <div class="text-center">  ― Albert Einstein </div> `    ,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <div class="text-center">  ― Albert Einstein </div> `    ,
    `“So many books, so little time.” <div class="text-center">  ― Frank Zappa </div> `    ,
    `“So many books, so little time.” <div class="text-center">  ― Frank Zappa </div> `    ,
    `“A room without books is like a body without a soul.” <div class="text-center">  ― Marcus Tullius Cicero </div> `    ,
    `“A room without books is like a body without a soul.” <div class="text-center">  ― Marcus Tullius Cicero </div> `    ,
    `“You only live once, but if you do it right, once is enough.” <div class="text-center">  ― Mae West </div> `    ,
    `“You only live once, but if you do it right, once is enough.” <div class="text-center">  ― Mae West </div> `    ,
    
]




function getQuote(){
document.getElementById("demo").innerHTML = quotes[Math.floor(Math.random() * 10)];
}






console.log(Math.floor(Math.random() * 10))
console.log(quotes.length)