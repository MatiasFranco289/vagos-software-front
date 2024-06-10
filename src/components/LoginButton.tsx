import { useGoogleLogin } from "@react-oauth/google";
import { request } from "../constants";

export default function LoginButton() {
  async function login(code: string) {
    try {
      await request.get("http://localhost:3000/users/login", {
        params: {
          code: code,
        },
        withCredentials: true,
      });

      window.location.assign("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      login(codeResponse.code);
    },
    flow: "auth-code",
  });

  /* const logOut = async () => {
    request
      .post("http://localhost:3000/users/logout", {
        withCredentials: true,
      })
      .then(() => {
        window.location.assign("/");
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  }; */

  return (
    <button
      className="p-3 outline outline-1 rounded-md h-11 flex flex-col justify-center text-slate-500 hover:text-white duration-100"
      onClick={() => googleLogin()}
    >
      Conectarse
    </button>
  );
}
