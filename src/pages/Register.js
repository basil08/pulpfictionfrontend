import { useEffect, useState } from "react";
import { createUser } from "../utils/api";
import { useNavigate } from 'react-router-dom';
import userLogoutGuard from "../utils/user-logout-guard";

export default function Register() {
  useEffect(userLogoutGuard(useNavigate()), []);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    const res = await createUser(email, username, password);

    if (!res.error) {
      navigate('/login');
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
            <label for="username" >Email</label>
            <input type="text" id="email" label="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="row">
            <label for="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="row">
            <button className="border-0 mt-2 p-2 bg-primary text-white" onClick={(e) => { e.preventDefault(); handleSignup()}}>Register</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
