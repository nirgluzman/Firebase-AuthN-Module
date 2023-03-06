import { useState } from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      setError("");
      await logOut();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello <br />
        {user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
