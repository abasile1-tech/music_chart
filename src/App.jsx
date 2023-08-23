import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [music, setMusic] = useState({});

  useEffect(() => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((data) => {
        setMusic(data);
      });
  }, []);

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  if (!isEmpty(music)) {
    console.log("music.feed.entry:", music.feed.entry);
  }

  return (
    <>
      <h1>Use Effect Lesson</h1>
      {isEmpty(music) ? <h1>Loading</h1> : <h1>Hello World</h1>}
    </>
  );
}

export default App;
