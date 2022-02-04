import "./App.css";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App() {
  return (
    <div className="App">
      <h2>Korkolaskuri sijoituksille</h2>
      <InputPanel />
      <OutputPanel />
    </div>
  );
}

export default App;
