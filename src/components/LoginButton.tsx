import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link
      to="/login"
      className="p-3 outline outline-1 rounded-md h-11 flex flex-col justify-center text-slate-500 hover:text-white duration-100"
    >
      Conectarse
    </Link>
  );
}
