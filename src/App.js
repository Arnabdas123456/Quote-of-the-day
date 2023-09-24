import React, {useState, useEffect} from "react"; 
import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

function App(){
  
  const [quote, setQuote]=useState("");  // For Quote of the day box
  const [aurthor, setAurther]=useState(""); // For  show the Aurther Name
 

useEffect(() => { 
   fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) =>{
         setQuote(quote.content); //Request responce send for Quote
         setAurther(quote.author); //Request responce show for Aurthor

      }
   )
  },[]);

  let fetchNewQuote = () => {
  fetch("https://api.quotable.io/random") //it is set responce for Button to send request in App
    .then(res => res.json())
    .then(
     (quote) =>{
        setQuote(quote.content);
         setAurther(quote.author);
       }
   )
  }
  return (
    <div className="App">
      <div className='heading'>
      <h1>Quote of the day</h1>
      <h4>{quote}</h4>
      <h3>Aurthor - {aurthor}</h3>
      
      </div><br/>
       <button className='btn' onClick={fetchNewQuote}> New Quote </button>
       <button className="twit"><TwitterIcon/></button>
       <button className="send"><SendIcon/></button>
    </div>
  );
}

export default App;
