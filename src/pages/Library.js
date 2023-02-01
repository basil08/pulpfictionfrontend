import { useEffect, useState } from "react"
import userLoginGuard from "../utils/user-login-guard";
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from "../utils/api";
import Spinner from 'react-bootstrap/Spinner';

export default function Library() {
  const [profile, setProfile] = useState(null);

  useEffect(userLoginGuard(useNavigate()), []);

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    const data = await getUserProfile();
    if (!data.error) {
      console.log(data);
      setProfile(data.data);
    } else {
      console.log(data.message);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {profile ?
          <div>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </div>
          : <Spinner />}
        </div>
      </div>
    </div>
  )
}