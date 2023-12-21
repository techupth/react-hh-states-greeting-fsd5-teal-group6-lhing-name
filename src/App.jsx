import "./App.css";
import { useState } from "react";
function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const thaiGreeting = () => {
    setGreetingMessage("สวัสดี!");
  };
  const englishGreeting = () => {
    setGreetingMessage("Hi!");
  };
  const chineseGreeting = () => {
    setGreetingMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={thaiGreeting}>สวัสดี!</button>
        <button onClick={englishGreeting}>Hi!</button>
        <button onClick={chineseGreeting}>你好!</button>
      </div>
    </div>
  );
}

export default App;
