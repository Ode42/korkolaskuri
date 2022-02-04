import React, { useState } from "react";

export default function InputPanel(props) {
  const [sijoitussumma, setSijoitussumma] = useState(0);

  const sijoitussummaUpdate = () => {
    props.addSijoitussumma(sijoitussumma);
  };
  return (
    <div className="input-panel">
      <h2>Input panel</h2>
      <form>
        <label for="sijoitussumma">Sijoitussumma: </label>
        <input
          type="number"
          value={sijoitussumma}
          onChange={(e) => setSijoitussumma(e.target.value)}
        />
        <button type="button" onClick={sijoitussummaUpdate}>
          Lähetä
        </button>
      </form>
    </div>
  );
}
