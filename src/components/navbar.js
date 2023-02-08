export default function Navbar({ title, profile, handleLogout }) {
  return (
    <div className="bg-black">
      <div className="row">
        <div className="col-3 h5 text-white">
          <i className="ps-2 bi bi-circle-fill fs-6 text-primary"></i>
          <span className="px-2">Pulp Fiction</span>
        </div>
        <div className="col text-white text-center">
          {"/" + title.toLowerCase()}
        </div>
        <div className="col-3 text-end pe-3">
          {profile && (
            <span className="text-white">
              {profile.username} |
              <button type="button" className="bg-black" onClick={handleLogout}>
                <i class="text-white bi bi-box-arrow-in-right"></i>
              </button>
            </span>
          )}
          {!profile && (
            <div>
              <span className="text-white">
                <a
                  name=""
                  id=""
                  class="btn-light"
                  href="/register"
                  role="button"
                >
                  Register
                </a>{" "}
                |
              </span>
              <span className="text-white">
                <a name="" id="" class="btn-light" href="/login" role="button">
                  Login
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
