import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import { UserCredentials } from "./constants";
import { request } from "./constants";
import { AxiosError } from "axios";

function App() {
  const [userCredentials, setUserCredentials] = useState<
    UserCredentials | undefined
  >();

  useEffect(() => {
    // Checks the API endpoint to get the user current session info
    async function set_session(): Promise<void> {
      try {
        const response = await request.get(
          "http://localhost:3000/users/status",
          {
            withCredentials: true,
          }
        );

        setUserCredentials(response.data.data[0] as UserCredentials);
      } catch (err) {
        if (err instanceof AxiosError) {
          return undefined;
        }

        throw new Error("Unhandled error: " + err);
      }
    }

    set_session();
  }, []);

  return (
    <div>
      <NavigationBar userCredentials={userCredentials} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
