import { request } from "../constants";
export default function UserProfile() {
  const logOut = async () => {
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
  };

  return (
    <div>
      <h1>Under construction</h1>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}
