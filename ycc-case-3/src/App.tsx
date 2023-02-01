import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  console.log(value);

  return (
    <div className="App">
      <InputField value={value} setValue={setValue} />
    </div>
  );
};

export default App;
