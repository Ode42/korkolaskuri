import InputPanel from "./InputPanel";
import OutputPanel from "./OutputPanel";
import { useState } from "react";

function KorkoWrapper() {
  const [sijoitussumma, setSijoitussumma] = useState(0);

  const addSijoitussumma = (summa) => {
    setSijoitussumma(summa);
  };

  return (
    <div className="wrapper">
      <h2>Korkolaskuri sijoituksille</h2>
      <InputPanel callback={addSijoitussumma} />
      <OutputPanel sijoitussumma={sijoitussumma} />
    </div>
  );
}

export default KorkoWrapper;
