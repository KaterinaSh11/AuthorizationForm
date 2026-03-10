import { Signin } from "../components";
import { AuthPageLayout } from "../layouts";

export const SigninPage = () => {
  function handleSignin(data) {
    console.log("LOGIN:", data);
  }

  return <AuthPageLayout FormComponent={Signin} onSubmit={handleSignin} />;
};
