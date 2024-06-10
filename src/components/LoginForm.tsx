import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { request } from "../constants";

export default function LoginForm() {
  const navigate = useNavigate();

  async function login(code: string) {
    try {
      await request.get("http://localhost:3000/users/login", {
        params: {
          code: code,
        },
        withCredentials: true,
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const logOut = async () => {
    request
      .post("http://localhost:3000/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  };
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      login(codeResponse.code);
    },
    flow: "auth-code",
  });

  return (
    <div className="bg-red-300">
      <button onClick={() => googleLogin()}>Log with google</button>
      <button onClick={() => logOut()}>LogOut</button>
    </div>
  );
}
