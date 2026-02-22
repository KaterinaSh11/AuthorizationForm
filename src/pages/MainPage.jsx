import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/signin")}>Signin</button>
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
};
