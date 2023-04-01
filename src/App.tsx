import "styles/global.scss";
import "./i18n";
import Home from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "pages/contact";
import About from "./components/About"

function App(): JSX.Element {
  return (
    <div className="App">
      < BrowserRouter>
        <Routes>
          <Route index element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/about" element={< About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
