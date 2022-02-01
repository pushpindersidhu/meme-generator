import React from "react";
import memeData from "./memeData";

function Meme() {
  const [allMemes, setAllMemes] = React.useState(memeData.data.memes);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNumber];
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          value={meme.topText}
          className="form-input"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={meme.bottomText}
          className="form-input"
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form-button">
          Get a new image
        </button>
      </div>

      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="" />
        <h2 className="meme-text meme-top-text">{meme.topText}</h2>
        <h2 className="meme-text meme-bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
