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
  // const codeData = JSON.stringify(exampleObj);
  const codeData = "test";

  return (
    <div className="App">
      <header className="App-header">
        <QRScanner />
        <div style={{ background: "white", padding: "16px" }}>
          <QRCode value={codeData} />
        </div>
      </header>
    </div>
  );
}

export default App;
