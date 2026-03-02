import { Routes, Route } from "react-router-dom";
import { MainPage, SigninPage, SignupPage } from "./pages";
import "./App.css";

export default function App() {
  return (
    <div className="wrappers">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
