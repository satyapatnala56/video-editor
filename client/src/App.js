import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Editor from "./Pages/Editor";
import { CentralProvider } from "./Context/central";

function App() {
  return (
    <CentralProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Editor />} path="/edit" exact />
          </Routes>
        </div>
      </BrowserRouter>
    </CentralProvider>
  );
}

export default App;
