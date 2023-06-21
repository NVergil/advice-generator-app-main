import { useEffect, useState } from "react";
import iconDice from "./assets/icon-dice.svg";
import patternDeskDivider from "./assets/pattern-divider-desktop.svg";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fecthAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthAdvice();
  }, []);

  return (
    <main>
      <section className="container">
        <h1 className="id-advice">advice #{advice.id}</h1>
        <blockquote className="advice">
          <q>{advice.advice}</q>
        </blockquote>
        <img src={patternDeskDivider} alt="divider" className="divider-desk" />
        <button className="randomize" type="button" onClick={fecthAdvice}>
          <img src={iconDice} alt="icon-dice" />
        </button>
      </section>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/NVergil" target="_blank" rel="noreferrer">VerDanT</a>.
      </footer>
    </main>
  );
};

export default App;
