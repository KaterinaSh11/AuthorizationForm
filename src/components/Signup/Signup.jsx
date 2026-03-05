import { useEffect, useState } from "react";
import { INPUTS_CONFIG } from "./constants";
import { TextInput } from "../TextInput/TextInput";
import { IconAt } from "@tabler/icons-react";

export const Signup = ({ handleSignup, currentField, setCurrentField }) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputsConfig, setInputsConfig] = useState(INPUTS_CONFIG);
  const [nameField, setNameField] = useState("");

  useEffect(() => {
    console.log("component has loaded once!");
    setCurrentField(inputsConfig.email);
    setNameField("email");
  }, []);

  useEffect(() => {
    if (nameField === "name") {
      setInputsConfig({ ...inputsConfig, name: currentField });
    }
    if (nameField === "nickname") {
      setInputsConfig({ ...inputsConfig, nickname: currentField });
    }
    if (nameField === "email") {
      setInputsConfig({ ...inputsConfig, email: currentField });
    }
    if (nameField === "password") {
      setInputsConfig({ ...inputsConfig, password: currentField });
    }
    if (nameField === "confirmPassword") {
      setInputsConfig({ ...inputsConfig, confirmPassword: currentField });
    }
    if (nameField === "gender") {
      setInputsConfig({ ...inputsConfig, gender: currentField });
    }
  }, [currentField]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = { name, nickname, email, password, confirmPassword, gender };

    handleSignup(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Registration
        </h2>

        <TextInput
          label={inputsConfig.name.label}
          description={inputsConfig.name.description}
          required={inputsConfig.name.required}
          size={inputsConfig.name.size}
          radius={inputsConfig.name.radius}
          variant={inputsConfig.name.variant}
          error={inputsConfig.name.error}
          type={inputsConfig.name.type}
          placeholder={inputsConfig.name.placeholder}
          onFocus={() => {
            setCurrentField(inputsConfig.name);
            setNameField("name");
          }}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label={inputsConfig.nickname.label}
          description={inputsConfig.nickname.description}
          required={inputsConfig.nickname.required}
          size={inputsConfig.nickname.size}
          radius={inputsConfig.nickname.radius}
          variant={inputsConfig.nickname.variant}
          error={inputsConfig.nickname.error}
          type={inputsConfig.nickname.type}
          placeholder={inputsConfig.nickname.placeholder}
          icon={<IconAt size={16} />}
          onFocus={() => {
            setCurrentField(inputsConfig.nickname);
            setNameField("nickname");
          }}
          onChange={(e) => setNickname(e.target.value)}
        />

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

        <TextInput
          label={inputsConfig.confirmPassword.label}
          description={inputsConfig.confirmPassword.description}
          required={inputsConfig.confirmPassword.required}
          size={inputsConfig.confirmPassword.size}
          radius={inputsConfig.confirmPassword.radius}
          variant={inputsConfig.confirmPassword.variant}
          error={inputsConfig.confirmPassword.error}
          type={inputsConfig.confirmPassword.type}
          placeholder={inputsConfig.confirmPassword.placeholder}
          onFocus={() => {
            setCurrentField(inputsConfig.confirmPassword);
            setNameField("confirmPassword");
          }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Gender</p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold 
                     hover:bg-indigo-700 active:scale-[0.98] transition 
                     shadow-lg shadow-indigo-200"
        >
          Sing up
        </button>
      </form>
    </div>
  );
};
