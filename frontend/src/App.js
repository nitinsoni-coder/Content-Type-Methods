import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import JsonForm from "./Components/JsonForm";
import MultipartForm from "./Components/MultipartForm";
import UrlEncodedForm from "./Components/UrlEncodedForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jsonForm" element={<JsonForm />} />
      <Route path="/multipartForm" element={<MultipartForm />} />
      <Route path="/urlEncodedForm" element={<UrlEncodedForm />} />
    </Routes>
  );
}

export default App;
