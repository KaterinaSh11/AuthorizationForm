import { InputPlayground, Signup } from "../components";
import { useState } from "react";

export const SignupPage = () => {
  const [currentField, setCurrentField] = useState(null);

  function handleSignup(data) {
    console.log("REGISTER:", data);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-[650px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
        <Signup
          handleSignup={handleSignup}
          currentField={currentField}
          setCurrentField={setCurrentField}
        />
      </div>

      <div className="w-1/3 p-8 bg-gray-50 border-l">
        <InputPlayground
          currentField={currentField}
          setCurrentField={setCurrentField}
        />
      </div>
    </div>
  );
};
