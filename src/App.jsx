import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
