import korko from "./../services/korko";

export default function OutputPanel(props) {
  const summa = korko(props.sijoitussumma, 10, 0.07);
  return (
    <div className="output-panel">
      <h2>Output panel</h2>
      <p>Sijoitussumma: {props.sijoitussumma}</p>
      <p>Summa: {korko(summa, 10, 0.07)}</p>
    </div>
  );
}
