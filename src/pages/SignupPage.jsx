import { InputPlayground } from "../components";
import { Signup } from "../components";

export const SignupPage = () => {
  function handleSignup(data) {
    console.log("REGISTER:", data);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-8">
        <Signup handleSignup={handleSignup} />
      </div>

      <div className="w-1/2 p-8 bg-gray-50">
        <InputPlayground />
      </div>
    </div>
  );
};
