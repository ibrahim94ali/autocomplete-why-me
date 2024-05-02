import { useState } from "react";
import "./App.css";
import Autocomplete from "@/components/Autocomplete";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app-container">
      <h2>You should hire me because I am</h2>
      <Autocomplete value={value} onChange={setValue} />
    </div>
  );
}

export default App;
