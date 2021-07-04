import React, { useState } from "react";
import "./styles.css";

const emojiPedia = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "❤️‍🔥": "Heart on Fire",
  "😊": "Smiling Face",
  "✔": "Check Mark",
  "🐶": "Dog Face"
};

var emojisWeHave = Object.keys(emojiPedia);

export default function App() {
  const [matchObject, setMatchObject] = useState("");

  function emojiChangeHandler(event) {
    const userInput = event.target.value;
    var matchObject = emojiPedia[userInput];
    if (matchObject === undefined) {
      matchObject = "Try Some Another Emoji";
    }
    setMatchObject(matchObject);
  }
  function emojiClickHandler(emoji) {
    var matchObject = emojiPedia[emoji];
    setMatchObject(matchObject);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiChangeHandler} />
      <h2 className="emojiAns">{matchObject}</h2>
      <div className="emojisWeHave">Emoji We Have </div>
      {emojisWeHave.map((emoji) => {
        return (
          <span
            key={emoji}
            className="emojis"
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
