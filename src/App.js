import "./App.scss";
import Home from "./Routes/Home/Home";
import { Route, Routes } from "react-router-dom";
import Resume from "./Routes/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
