import React, { useState, useEffect } from "react";

export default function InputPanel(props) {
  const [sijoitussumma, setSijoitussumma] = useState(0);

  const sijoitussummaUpdate = () => {
    props.callback(sijoitussumma);
  };

  useEffect(() => {
    sijoitussummaUpdate();
  }, [sijoitussumma]);

  return (
    <div className="input-panel">
      <h2>Input panel</h2>
      <form>
        <label for="sijoitussumma">Sijoitussumma: </label>
        <input
          type="number"
          value={sijoitussumma}
          onChange={(e) => {
            setSijoitussumma(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
