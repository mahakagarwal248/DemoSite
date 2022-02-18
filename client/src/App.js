import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Demofirst } from "./catalogue/sites/Demofirst";
import { Demosecond } from "./catalogue/sites/Demosecond";
import { Demothird } from "./catalogue/sites/Demothird";
import ContactForm from "./components/ContactForm/ContactForm";
import WorkingState from "./contexts/workngalert/workingstate";
import Spinner from "./components/Spinner/Spinner";
function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <>
      <WorkingState>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                loading ? (
                  <Spinner loading={loading} />
                ) : (
                  <div className="App">
                    <Navbar />
                    <Homepage />
                    <Footer />
                  </div>
                )
              }
            ></Route>
            <Route path="/contactus" element={<ContactForm />} />
            <Route exact path="/demo">
              <Route path="/demo/site1" element={<Demofirst />} />
              <Route path="/demo/site2" element={<Demosecond />} />
              <Route path="/demo/site3" element={<Demothird />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WorkingState>
    </>
  );
}

export default App;
