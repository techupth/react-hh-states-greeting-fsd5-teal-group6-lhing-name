import "./App.css";
import { useState } from "react";

function App() {
  const [GreetingMessage, setGreetingMessage] = useState("GreetingMessage"); //  return เป็น aray
  return (
    <div className="App">
      <div className="greeting-container">{GreetingMessage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage("สวัสดี");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingMessage("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingMessage("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
