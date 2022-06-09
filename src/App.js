import "./App.css";
import QRScanner from "./components/QRScanner";
import QRCode from "react-qr-code";

const exampleObj = {
  id: "1",
  type: "item",
  details: {
    meta: [],
  },
};

function App() {
  const codeData = JSON.stringify(exampleObj);

  return (
    <div className="App">
      <header className="App-header">
        <QRScanner />
        <QRCode value={codeData} />
      </header>
    </div>
  );
}

export default App;
