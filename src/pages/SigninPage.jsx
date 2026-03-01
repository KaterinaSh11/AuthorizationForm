import { InputPlayground, Signin } from "../components";
import { useState } from "react";

export const SigninPage = () => {
  const [error, setError] = useState("");
  const [variant, setVariant] = useState("default");
  const [currentField, setCurrentField] = useState(null);

  function handleSignin(data) {
    console.log("LOGIN:", data);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-8">
        <Signin
          currentField={currentField}
          setCurrentField={setCurrentField}
          handleSignin={handleSignin}
          variant={variant}
          error={error}
        />
      </div>

      <div className="w-1/2 p-8 bg-gray-50">
        <InputPlayground
          currentField={currentField}
          setCurrentField={setCurrentField}
          variant={variant}
          setVariant={setVariant}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
};
