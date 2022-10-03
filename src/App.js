import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./Components/Editor";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Video Editor</h1>
        <NavBar />
        <Routes>
          <Route element={<Editor />} path="/editor" exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
