import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import Works from "./Components/Works";
import About from "./Components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
