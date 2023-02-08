import { useEffect, useState } from "react";
import userLoginGuard from "../utils/user-login-guard";
import { useNavigate } from "react-router-dom";
import { getUserProfile, logoutUser } from "../utils/api";
import { checkJWT } from "../utils/api";
import Navbar from "../components/navbar";
import RightSideBar from "../components/rightSidebar";

export default function Library() {
  const navigate = useNavigate();

  useEffect(userLoginGuard(useNavigate()), []);

  const [profile, setProfile] = useState(null);

  const getUser = async () => {
    if (checkJWT()) {
      const payload = await getUserProfile();
      if (!payload.error) {
        setProfile(payload.data);
      }
    }
  };

  const onLogout = () => {
    logoutUser();
    navigate('/login');
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
    {profile &&
      <Navbar title={'Library'} profile={profile} handleLogout={onLogout} />
    }
        <div class="row">
          <div class="col-3">Placeholder</div>
          <div class="col"></div>
          <div class="col-3">
            <div className="border-start">
            <RightSideBar />
            </div>
          </div>
        </div>
    </>
  );
}
