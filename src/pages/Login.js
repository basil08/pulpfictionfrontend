import { useEffect, useState } from "react";
import { loginUser } from "../utils/api";
import { useNavigate } from 'react-router-dom';
import userLogoutGuard from "../utils/user-logout-guard";

export default function Login() {
  useEffect(userLogoutGuard(useNavigate()), []);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async () => {
    setIsSubmitting(true);
    const res = await loginUser(username, password);

    if (!res.error) {
      setIsSubmitting(false);
      navigate('/library');
    } else {
      console.log(res.message);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form>
          <div className="row">
            <label for="username" >User name</label>
            <input type="text" id="username" label="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div className="row">
            <label for="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="row">
            <button disabled={isSubmitting} className="border-0 mt-2 p-2 bg-primary text-white" onClick={(e) => { e.preventDefault(); handleLogin()}}>Login</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
