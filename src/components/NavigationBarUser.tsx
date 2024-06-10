import { useNavigate } from "react-router-dom";
import { UserCredentials } from "../constants";

interface NavigationBarUserProps {
  userCredentials: UserCredentials;
}

export default function NavigationBarUser({
  userCredentials,
}: NavigationBarUserProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-start items-center border-2 rounded-xl p-2 mx-2 cursor-pointer hover:scale-105 duration-100 max-h-16"
      onClick={() => navigate("/user-profile")}
    >
      <div className="rounded-full w-12 overflow-hidden mx-1">
        <img src={userCredentials.userInfo.picture} alt="pfp" />
      </div>

      <p className="mx-1 ml-3 font-semibold">
        {userCredentials.userInfo.username}
      </p>
    </div>
  );
}
