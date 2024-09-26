let dictionary = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron",
    },
  ];
  
const button=document.getElementsByClassName('quoteButton')[0]
button.addEventListener('click',()=>
{
    const textBox=document.getElementsByClassName('text')[0]
    const author=document.getElementsByClassName('author')[0]
    let index=Math.floor(Math.random()*dictionary.length)
    textBox.innerHTML='"'+dictionary[index].quote+'"'
    author.innerHTML=dictionary[index].author

})

