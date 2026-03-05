import { useEffect, useState } from "react";
import { INPUTS_CONFIG } from "./constants";
import { TextInput } from "../";

export const Signin = ({ handleSignin, currentField, setCurrentField }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputsConfig, setInputConfig] = useState(INPUTS_CONFIG);
  const [nameField, setNameField] = useState("");

  useEffect(() => {
    console.log("component has loaded once!");
    setCurrentField(inputsConfig.email);
    setNameField("email");
  }, []);

  useEffect(() => {
    if (nameField === "email") {
      setInputConfig({ ...inputsConfig, email: currentField });
    }
    if (nameField === "password") {
      setInputConfig({ ...inputsConfig, password: currentField });
    }
  }, [currentField]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = { email, password };

    handleSignin(data);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Enter
        </h2>

        <TextInput
          label={inputsConfig.email.label}
          description={inputsConfig.email.description}
          required={inputsConfig.email.required}
          size={inputsConfig.email.size}
          radius={inputsConfig.email.radius}
          variant={inputsConfig.email.variant}
          error={inputsConfig.email.error}
          type={inputsConfig.email.type}
          placeholder={inputsConfig.email.placeholder}
          onFocus={() => {
            setCurrentField(inputsConfig.email);
            setNameField("email");
          }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label={inputsConfig.password.label}
          description={inputsConfig.password.description}
          required={inputsConfig.password.required}
          size={inputsConfig.password.size}
          radius={inputsConfig.password.radius}
          variant={inputsConfig.password.variant}
          error={inputsConfig.password.error}
          type={inputsConfig.password.type}
          placeholder={inputsConfig.password.placeholder}
          onFocus={() => {
            setCurrentField(inputsConfig.password);
            setNameField("password");
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium 
             hover:bg-blue-700 active:scale-[0.98] 
             transition-all duration-200 
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
