import React, { useEffect,useState,useRef } from 'react';
import './App.css';
function App (){
  const [result, setResult] = useState('');
  const inputRef= useRef(null);
 useEffect(() => inputRef.current.focus());

 function handleClick(e){
  setResult(result + e.target.name)
 }
 function backspace (){
  setResult(result.slice(0,result.length-1));
}
function clear(){
  setResult('');
}

 function calculate(){
   try{
     setResult(eval(result) + "");
   }
catch(error){
  setResult(error);

}
};
 
 return (
      
        <div className="bg">  
        <br></br>
        <br></br>    
      <div className="App">
      <form>
       <input type="text" value={result} ref={inputRef} />    
       </form>
      <div className="calc-App">
        <button id="Clear" onClick={clear}>CE</button> 
        <button id="clear" onClick={clear}>C</button>
        <button id="backspace" onClick={backspace}>x</button>
        <button name="/" onClick={handleClick}> /</button> 
        <button name="7" onClick={handleClick}>7</button> 
        <button name="8" onClick={handleClick}>8</button>  
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="0" onClick={handleClick}>0</button>
        <button id="result" onClick={calculate}>=</button>
        

      </div>
      
      </div>
          
     
      </div>
  );
 
 }

 export default App;

