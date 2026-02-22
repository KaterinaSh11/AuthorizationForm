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

      {/* <div className="box">
        <h2>Login</h2>
        <Signin onSubmit={handleSignin} />
        
        <h2>Signup</h2>
        <Signup onSubmit={handleSignup} />
      </div>
      <div>
        <InputPlayground />
      </div> */}
    </div>
  );
}
