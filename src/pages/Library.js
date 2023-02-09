import { useEffect, useState } from "react";
import userLoginGuard from "../utils/user-login-guard";
import { useNavigate } from "react-router-dom";
import { getUserProfile, logoutUser, getMovies } from "../utils/api";
import { checkJWT } from "../utils/api";
import Navbar from "../components/navbar";
import RightSideBar from "../components/rightSidebar";
import LibraryCard from "../components/libraryCard";
import { Spinner } from "react-bootstrap";

export default function Library() {
  const navigate = useNavigate();

  useEffect(userLoginGuard(useNavigate()), []);

  const [profile, setProfile] = useState(null);
  const [movies, setMovies] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(15);
  const [error, setError] = useState("");
  const [loadingMovies, setLoadingMovies] = useState(false);

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
    getLocalMovies();
  }, []);


  const handleAddToStore = (movieId) => {
    
  }

  const getLocalMovies = async () => {
    setLoadingMovies(true);
    const payload = await getMovies(skip, limit);

    if (!payload.error) {
      setMovies(payload.data.movies);
    } else {
      setMovies([]);
      setError(payload.message);
    }

    setLoadingMovies(false);
  }

  return (
    <>
    {profile &&
      <Navbar title={'Library'} profile={profile} handleLogout={onLogout} />
    }
        <div class="row">
          <div class="col-2 bg-info">Placeholder</div>
          <div class="col">
            <div className="m-2 mx-5">
            {!movies && !loadingMovies && <div className="fs-2 p-2 border-1 text-danger">{error}</div>}
            {!movies && <Spinner /> }
            {movies.map((movie, index) =>
              <div className="my-2">
                <LibraryCard movie={movie} key={index} handleAddToStore={handleAddToStore} />
              </div>
            )}
            </div>
          </div>
          <div class="col-3">
            <div className="border-start">
            <RightSideBar />
            </div>
          </div>
        </div>
    </>
  );
}
