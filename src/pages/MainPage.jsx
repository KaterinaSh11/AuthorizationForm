import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-4 w-64">
        <button
          onClick={() => navigate("/signin")}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Sign in
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};