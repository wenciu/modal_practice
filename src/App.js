import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal.js";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="download-btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Download
      </button>
      {open && <Modal state={setOpen} />}
    </div>
  );
}

export default App;
