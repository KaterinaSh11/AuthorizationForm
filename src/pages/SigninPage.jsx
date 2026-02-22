import { InputPlayground } from "../components";
import { Signin } from "../components";

export const SigninPage = () => {
  function handleSignin(data) {
    console.log("LOGIN:", data);
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-8">
        <Signin handleSignin={handleSignin} />
      </div>

      <div className="w-1/2 p-8 bg-gray-50">
        <InputPlayground />
      </div>
    </div>
  );
};
