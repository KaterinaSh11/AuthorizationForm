import { Signup } from "../components";
import { AuthPageLayout } from "../layouts";

export const SignupPage = () => {
  function handleSignup(data) {
    console.log("REGISTER:", data);
  }

  return <AuthPageLayout FormComponent={Signup} onSubmit={handleSignup} />;
};
