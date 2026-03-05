import { InputPlayground, Signin } from "../components";
import { useState } from "react";

export const SigninPage = () => {
  const [currentField, setCurrentField] = useState(null);

  function handleSignin(data) {
    console.log("LOGIN:", data);
  }

return (
  <div className="flex h-screen">
    <div className="w-[650px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
      <Signin
        handleSignin={handleSignin}
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
