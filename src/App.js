import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Demofirst } from "./catalogue/sites/Demofirst";
import { Demosecond } from "./catalogue/sites/Demosecond";
import { Demothird } from "./catalogue/sites/Demothird";
import { Demoforth } from "./catalogue/sites/Demoforth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <Navbar />
                <Homepage />
                <Footer />
              </div>
            }
          ></Route>
          <Route exact path="/demo">
            <Route path="/demo/site1" element={<Demofirst />} />
            <Route path="/demo/site2" element={<Demosecond />} />
            <Route path="/demo/site3" element={<Demothird />} />
            <Route path="/demo/site4" element={<Demoforth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
