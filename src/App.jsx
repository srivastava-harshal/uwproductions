import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import Works from "./Components/Works";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/works" element={<Works />} />
    </Routes>
  );
}

export default App;
